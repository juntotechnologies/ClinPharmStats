/** Reads and writes PNG metadata: the image size and the source hash kept in a tEXt chunk. */
import { createHash } from "node:crypto"
import { crc32 } from "node:zlib"

export const SOURCE_KEY = "source-sha256"
const SIGNATURE_LENGTH = 8
const CHUNK_OVERHEAD = 12

export function sha256(text) {
  return createHash("sha256").update(text).digest("hex")
}

function encodeChunk(type, data) {
  const body = Buffer.concat([Buffer.from(type, "latin1"), data])
  const length = Buffer.alloc(4)
  const crc = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([length, body, crc])
}

function readChunks(png) {
  const chunks = []
  let offset = SIGNATURE_LENGTH
  while (offset < png.length) {
    const length = png.readUInt32BE(offset)
    const type = png.toString("latin1", offset + 4, offset + 8)
    chunks.push({ type, data: png.subarray(offset + 8, offset + 8 + length) })
    offset += length + CHUNK_OVERHEAD
  }
  return chunks
}

/** Returns a copy of the PNG with one tEXt chunk added before the closing IEND chunk. */
export function embedText(png, key, value) {
  const chunk = encodeChunk("tEXt", Buffer.from(`${key}\0${value}`, "latin1"))
  const split = png.length - CHUNK_OVERHEAD
  return Buffer.concat([png.subarray(0, split), chunk, png.subarray(split)])
}

function isTextChunk(key, chunk) {
  return chunk.type === "tEXt" && chunk.data.toString("latin1").startsWith(`${key}\0`)
}

/** The value of the tEXt chunk with this key, or null. */
export function readText(png, key) {
  const chunk = readChunks(png).find(isTextChunk.bind(null, key))
  return chunk ? chunk.data.toString("latin1").split("\0")[1] : null
}

export function readSize(png) {
  const header = readChunks(png)[0]
  if (header?.type !== "IHDR") throw new Error("not a PNG file")
  return { width: header.data.readUInt32BE(0), height: header.data.readUInt32BE(4) }
}
