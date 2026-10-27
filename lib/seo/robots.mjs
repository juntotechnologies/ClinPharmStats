/** Renders robots.txt: allow every listed crawler and name the sitemap. */
import { GENERATED_NOTE, absoluteUrl } from "./urls.mjs"

function crawlerBlock(name) {
  return `User-agent: ${name}\nAllow: /`
}

/** @param {import("./schema.mjs").Discovery} discovery */
export function renderRobots(discovery) {
  const blocks = discovery.crawlers.map(crawlerBlock).join("\n\n")
  const sitemap = `Sitemap: ${absoluteUrl(discovery, "/sitemap.xml")}`
  return `# ${GENERATED_NOTE}\n${blocks}\n\n${sitemap}\n`
}
