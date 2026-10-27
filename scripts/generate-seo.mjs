/** Command `npm run seo`: writes every discovery file and image into public/ from data/discovery.json. */
import { mkdir, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import { imageFiles, textFiles } from "../lib/seo/files.mjs"
import { lastmodsFromGit } from "../lib/seo/lastmod.mjs"
import { ROOT, loadDiscovery } from "../lib/seo/load.mjs"
import { renderPng } from "../lib/seo/raster.mjs"

async function writeDeep(path, content) {
  const target = join(ROOT, path)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, content)
  console.log(`wrote ${path}`)
}

async function writeText([path, content]) {
  await writeDeep(path, content)
}

async function writeImage(image) {
  await writeDeep(image.path, await renderPng(image.svg))
}

async function main() {
  const discovery = loadDiscovery()
  const today = new Date().toISOString().slice(0, 10)
  const lastmods = lastmodsFromGit(ROOT, discovery, today)
  for (const file of textFiles(discovery, lastmods)) await writeText(file)
  for (const image of imageFiles(discovery)) await writeImage(image)
}

await main()
