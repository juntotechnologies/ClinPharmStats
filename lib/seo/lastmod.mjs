/** Finds the last-modified date of each page: from git when the files are generated, from disk when they are checked. */
import { execFileSync } from "node:child_process"

const SITEMAP_ENTRY = /<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g

/** The date of the last commit that changed one file, in YYYY-MM-DD form, or an empty string. */
export function gitDate(root, source) {
  const args = ["log", "-1", "--format=%cs", "--", source]
  return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim()
}

function entryOf(root, today, page) {
  return [page.path, gitDate(root, page.source) || today]
}

/** Page path to date, from git. A page not yet committed gets the date of today. */
export function lastmodsFromGit(root, discovery, today) {
  return Object.fromEntries(discovery.pages.map(entryOf.bind(null, root, today)))
}

function pairOf(match) {
  return [new URL(match[1]).pathname, match[2]]
}

/** Page path to date, as written in a sitemap. The check keeps these dates because git sets them. */
export function lastmodsFromSitemap(xml) {
  return Object.fromEntries([...xml.matchAll(SITEMAP_ENTRY)].map(pairOf))
}
