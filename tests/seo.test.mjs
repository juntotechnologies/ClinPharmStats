/** Tests for the discovery data: crawlers, agent rules, pages, honest copy, plain language and no email address. */
import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import test from "node:test"
import { renderAgentsJson, renderAgentsTxt } from "../lib/seo/agents.mjs"
import { textFiles } from "../lib/seo/files.mjs"
import { buildJsonLd } from "../lib/seo/jsonld.mjs"
import { ROOT, loadDiscovery } from "../lib/seo/load.mjs"
import { buildPageMetadata, buildSiteMetadata } from "../lib/seo/metadata.mjs"
import { renderRobots } from "../lib/seo/robots.mjs"

const DISCOVERY = loadDiscovery()
const EMAIL = /[\w.+-]+@[\w-]+\.[\w.-]+/
const MAX_WORDS = 20
const NOT_PUBLISHED = new Set(["debug"])
const CRAWLERS = ["*", "GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "CCBot"]
const FORBIDDEN = ["Post a form.", "Send a message for a person.", "Book a call for a person."]

function source(path) {
  return readFileSync(join(ROOT, path), "utf8")
}

function sampleDate(page) {
  return [page.path, "2026-01-01"]
}

function fileText([, content]) {
  return content
}

function generatedTexts() {
  const dates = Object.fromEntries(DISCOVERY.pages.map(sampleDate))
  return textFiles(DISCOVERY, dates).map(fileText)
}

function isRoute(entry) {
  return entry.isDirectory() && !NOT_PUBLISHED.has(entry.name) && !entry.name.startsWith("_")
}

function routePath(entry) {
  return `/${entry.name}/`
}

function pagePath(page) {
  return page.path
}

function isNotHome(page) {
  return page.path !== "/"
}

function typeOf(node) {
  return node["@type"]
}

function descriptionOf(page) {
  return page.description
}

function summaryOf(item) {
  return item.summary
}

function itemsOf(service) {
  return service.items
}

function proseOf() {
  const { summary, profile, engagement, pages, services, openSource, agents } = DISCOVERY
  const fields = [summary, ...profile, ...engagement, agents.summary, ...agents.may, ...agents.mayNot]
  return [...fields, ...pages.map(descriptionOf), ...services.map(summaryOf), ...openSource.map(summaryOf)]
}

function sentencesOf(text) {
  return text.split(/(?<=[.!?])\s+/)
}

function checkSentenceLength(sentence) {
  const words = sentence.split(/\s+/).length
  assert.ok(words <= MAX_WORDS, `More than ${MAX_WORDS} words: ${sentence}`)
}

function checkProse(text) {
  sentencesOf(text).forEach(checkSentenceLength)
}

function mustContain(file, text) {
  assert.ok(source(file).toLowerCase().includes(text.toLowerCase()), `${file} must contain: ${text}`)
}

function allowsCrawler(robots, name) {
  assert.match(robots, new RegExp(`User-agent: ${name.replace("*", "\\*")}\\nAllow: /\\n`))
}

test("no generated file, no JSON-LD and no data file holds an email address", () => {
  for (const text of generatedTexts()) assert.doesNotMatch(text, EMAIL)
  assert.doesNotMatch(JSON.stringify(buildJsonLd(DISCOVERY)), EMAIL)
  assert.doesNotMatch(JSON.stringify(buildSiteMetadata(DISCOVERY)), EMAIL)
  assert.doesNotMatch(source("data/discovery.json"), EMAIL)
})

test("robots.txt allows every listed crawler and names the sitemap", () => {
  const robots = renderRobots(DISCOVERY)
  CRAWLERS.forEach(allowsCrawler.bind(null, robots))
  assert.match(robots, /Sitemap: https:\/\/clinpharmstats\.com\/sitemap\.xml/)
  assert.doesNotMatch(robots, /Disallow/)
})

test("agent rules allow reading and forbid forms, messages and bookings", () => {
  const rules = JSON.parse(renderAgentsJson(DISCOVERY))
  assert.deepEqual(rules.mayDo, ["Read each public page.", "Follow each link on a page."])
  for (const action of FORBIDDEN) assert.ok(rules.mayNotDo.includes(action), action)
  assert.equal(rules.contact, "https://clinpharmstats.com/contact/")
  assert.match(renderAgentsTxt(DISCOVERY), /^Disallow: Book a call for a person\.$/m)
})

test("the pages in the data are the pages in app/", () => {
  const entries = readdirSync(join(ROOT, "app"), { withFileTypes: true })
  const routes = entries.filter(isRoute).map(routePath).sort()
  assert.deepEqual(routes, DISCOVERY.pages.filter(isNotHome).map(pagePath).sort())
})

test("each page has its own title, description and canonical link", () => {
  const titles = new Set()
  for (const page of DISCOVERY.pages) {
    const meta = buildPageMetadata(DISCOVERY, page.path)
    assert.equal(meta.alternates.canonical, `https://clinpharmstats.com${page.path}`)
    assert.deepEqual([meta.openGraph.images[0].width, meta.openGraph.images[0].height], [1200, 630])
    titles.add(meta.title)
  }
  assert.equal(titles.size, DISCOVERY.pages.length)
})

test("the JSON-LD graph holds one ProfessionalService and one WebSite", () => {
  assert.deepEqual(buildJsonLd(DISCOVERY)["@graph"].map(typeOf), ["ProfessionalService", "WebSite"])
})

test("every sentence of the copy has at most 20 words", () => {
  proseOf().forEach(checkProse)
})

test("each claim in the data stays on the live pages", () => {
  DISCOVERY.services.flatMap(itemsOf).forEach(mustContain.bind(null, "app/services/page.tsx"))
  mustContain("app/contact/page.tsx", DISCOVERY.address.street)
  mustContain("app/contact/page.tsx", "not currently hiring")
  mustContain("app/careers/page.tsx", "no open positions")
  mustContain("app/about/page.tsx", "New Jersey Corporation")
  mustContain("app/about/page.tsx", `since ${DISCOVERY.foundingYear}`)
  mustContain("app/about/page.tsx", DISCOVERY.alternateName)
  mustContain("app/open-source/components/BioEqCard.tsx", DISCOVERY.openSource[0].url)
})
