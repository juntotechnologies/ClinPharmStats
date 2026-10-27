/** Renders agents.txt and .well-known/agents.json: what an automated agent may and may not do. */
import { GENERATED_NOTE, absoluteUrl } from "./urls.mjs"

function rule(word, text) {
  return `${word}: ${text}`
}

function allowRule(text) {
  return rule("Allow", text)
}

function denyRule(text) {
  return rule("Disallow", text)
}

function headLines(discovery) {
  return [`# ${GENERATED_NOTE}`, rule("Name", discovery.name), rule("Site", discovery.url), rule("Summary", discovery.agents.summary)]
}

function tailLines(discovery) {
  return [
    rule("Contact", absoluteUrl(discovery, discovery.agents.contactPath)),
    rule("Sitemap", absoluteUrl(discovery, "/sitemap.xml")),
    rule("LLMs", absoluteUrl(discovery, "/llms.txt")),
  ]
}

/** @param {import("./schema.mjs").Discovery} discovery */
export function renderAgentsTxt(discovery) {
  const { may, mayNot } = discovery.agents
  const rules = [...may.map(allowRule), ...mayNot.map(denyRule)]
  return `${[...headLines(discovery), ...rules, ...tailLines(discovery)].join("\n")}\n`
}

/** @param {import("./schema.mjs").Discovery} discovery */
export function renderAgentsJson(discovery) {
  const { agents } = discovery
  const body = {
    name: discovery.name,
    url: discovery.url,
    summary: agents.summary,
    mayDo: agents.may,
    mayNotDo: agents.mayNot,
    contact: absoluteUrl(discovery, agents.contactPath),
    sitemap: absoluteUrl(discovery, "/sitemap.xml"),
    llms: absoluteUrl(discovery, "/llms.txt"),
  }
  return `${JSON.stringify(body, null, 2)}\n`
}
