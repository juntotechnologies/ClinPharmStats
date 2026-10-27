/** Renders llms.txt: a short Markdown summary for language-model crawlers. */
import { absoluteUrl } from "./urls.mjs"

function link(discovery, name, path) {
  return `[${name}](${absoluteUrl(discovery, path)})`
}

function bulletLine(text) {
  return `- ${text}`
}

function itemLine(item) {
  return `  - ${item}`
}

function serviceBlock(discovery, service) {
  const head = `- ${link(discovery, service.name, "/services/")}: ${service.summary}`
  return [head, ...service.items.map(itemLine)].join("\n")
}

function pageLine(discovery, page) {
  return `- ${link(discovery, page.name, page.path)}: ${page.description}`
}

function isNotHome(page) {
  return page.path !== "/"
}

function openSourceLine(project) {
  return `- [${project.name}](${project.url}): ${project.summary}`
}

function profileText(discovery) {
  return [...discovery.profile, `The earlier company name is ${discovery.alternateName}.`].join(" ")
}

function officeLine({ address }) {
  return `- Office: ${address.street}, ${address.city}, ${address.region} ${address.postalCode}, ${address.country}`
}

function contactLines(discovery) {
  const contact = `- ${link(discovery, "Contact page", discovery.agents.contactPath)}`
  const rules = `- ${link(discovery, "Agent rules", "/agents.txt")}: What an automated agent may and may not do.`
  return [contact, officeLine(discovery), rules]
}

function section(title, lines) {
  return `## ${title}\n\n${lines.join("\n")}`
}

/** @param {import("./schema.mjs").Discovery} discovery */
export function renderLlms(discovery) {
  const pages = discovery.pages.filter(isNotHome).map(pageLine.bind(null, discovery))
  const blocks = [
    `# ${discovery.name}\n\n> ${discovery.summary}\n\n${profileText(discovery)}`,
    section("Services", discovery.services.map(serviceBlock.bind(null, discovery))),
    section("How the work runs", discovery.engagement.map(bulletLine)),
    section("Pages", pages),
    section("Open source", discovery.openSource.map(openSourceLine)),
    section("Contact", contactLines(discovery)),
  ]
  return `${blocks.join("\n\n")}\n`
}
