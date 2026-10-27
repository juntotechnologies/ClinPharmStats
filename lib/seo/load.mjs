/** Reads data/discovery.json and checks it against the schema. Bad data stops the run. */
import { readFileSync } from "node:fs"
import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { discoverySchema } from "./schema.mjs"

export const ROOT = fileURLToPath(new URL("../..", import.meta.url))

/** @returns {import("./schema.mjs").Discovery} */
export function loadDiscovery() {
  const raw = readFileSync(join(ROOT, "data/discovery.json"), "utf8")
  return discoverySchema.parse(JSON.parse(raw))
}
