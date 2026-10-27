/** Drift check: fails when a generated discovery file on disk differs from what data/discovery.json produces. */
import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import test from "node:test"
import { imageFiles, textFiles } from "../lib/seo/files.mjs"
import { lastmodsFromSitemap } from "../lib/seo/lastmod.mjs"
import { ROOT, loadDiscovery } from "../lib/seo/load.mjs"
import { SOURCE_KEY, readSize, readText, sha256 } from "../lib/seo/png.mjs"

const DISCOVERY = loadDiscovery()
const HINT = "Run `npm run seo` and commit the result."

function onDisk(path) {
  return join(ROOT, path)
}

function diskLastmods() {
  return lastmodsFromSitemap(readFileSync(onDisk("public/sitemap.xml"), "utf8"))
}

function checkTextFile([path, expected]) {
  assert.ok(existsSync(onDisk(path)), `${path} is missing. ${HINT}`)
  assert.equal(readFileSync(onDisk(path), "utf8"), expected, `${path} differs from its source. ${HINT}`)
}

function checkImage(image) {
  assert.ok(existsSync(onDisk(image.path)), `${image.path} is missing. ${HINT}`)
  const png = readFileSync(onDisk(image.path))
  assert.deepEqual(readSize(png), { width: image.width, height: image.height }, `${image.path} has the wrong size`)
  assert.equal(readText(png, SOURCE_KEY), sha256(image.svg), `${image.path} differs from its source. ${HINT}`)
}

test("each generated text file equals its source", () => {
  textFiles(DISCOVERY, diskLastmods()).forEach(checkTextFile)
})

test("each generated image has the right size and comes from the current source", () => {
  imageFiles(DISCOVERY).forEach(checkImage)
})

test("the sitemap holds one valid date for each page", () => {
  const dates = diskLastmods()
  for (const page of DISCOVERY.pages) assert.match(dates[page.path] ?? "", /^\d{4}-\d{2}-\d{2}$/, page.path)
})

test("logo.svg uses the brand gradient colours that the generated images use", () => {
  const logo = readFileSync(onDisk(`public${DISCOVERY.brand.logoPath}`), "utf8").toLowerCase()
  assert.ok(logo.includes(DISCOVERY.brand.gradientStart.toLowerCase()))
  assert.ok(logo.includes(DISCOVERY.brand.gradientEnd.toLowerCase()))
})
