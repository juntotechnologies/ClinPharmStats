/** The generated files: where each one lives and what content or source it has. */
import { renderAgentsJson, renderAgentsTxt } from "./agents.mjs"
import { renderOgSvg, renderTouchIconSvg } from "./graphics.mjs"
import { renderLlms } from "./llms.mjs"
import { renderRobots } from "./robots.mjs"
import { renderSitemap } from "./sitemap.mjs"
import { publicFile } from "./urls.mjs"

const TEXT_FILES = [
  { path: "public/robots.txt", render: renderRobots },
  { path: "public/sitemap.xml", render: renderSitemap },
  { path: "public/llms.txt", render: renderLlms },
  { path: "public/agents.txt", render: renderAgentsTxt },
  { path: "public/.well-known/agents.json", render: renderAgentsJson },
]

function renderText(discovery, lastmods, file) {
  return [file.path, file.render(discovery, lastmods)]
}

/**
 * Every generated text file as a [path, content] pair.
 * @param {import("./schema.mjs").Discovery} discovery
 * @param {Record<string, string>} lastmods
 * @returns {[string, string][]}
 */
export function textFiles(discovery, lastmods) {
  return TEXT_FILES.map(renderText.bind(null, discovery, lastmods))
}

/**
 * Every generated image: its path, its size and the SVG it comes from.
 * @param {import("./schema.mjs").Discovery} discovery
 */
export function imageFiles(discovery) {
  const { og, brand } = discovery
  const touch = brand.touchIconSize
  return [
    { path: publicFile(og.path), width: og.width, height: og.height, svg: renderOgSvg(discovery) },
    { path: publicFile(brand.touchIconPath), width: touch, height: touch, svg: renderTouchIconSvg(discovery) },
  ]
}
