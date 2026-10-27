/** Renders sitemap.xml with one entry and one last-modified date for each page. */
import { GENERATED_NOTE, absoluteUrl } from "./urls.mjs"

const XMLNS = "http://www.sitemaps.org/schemas/sitemap/0.9"

function urlEntry(discovery, lastmods, page) {
  const loc = absoluteUrl(discovery, page.path)
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmods[page.path]}</lastmod>\n  </url>`
}

/**
 * @param {import("./schema.mjs").Discovery} discovery
 * @param {Record<string, string>} lastmods Date in YYYY-MM-DD form, keyed by page path.
 */
export function renderSitemap(discovery, lastmods) {
  const entries = discovery.pages.map(urlEntry.bind(null, discovery, lastmods)).join("\n")
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- ${GENERATED_NOTE} -->`
  return `${header}\n<urlset xmlns="${XMLNS}">\n${entries}\n</urlset>\n`
}
