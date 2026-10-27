/** Turns an SVG string into a PNG that records the hash of its source. */
import sharp from "sharp"
import { SOURCE_KEY, embedText, sha256 } from "./png.mjs"

export async function renderPng(svg) {
  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  return embedText(png, SOURCE_KEY, sha256(svg))
}
