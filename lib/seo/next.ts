/** Connects data/discovery.json to the Next.js metadata API and to the JSON-LD script. */
import discoveryJson from "@/data/discovery.json"
import type { Metadata } from "next"
import { buildJsonLd } from "./jsonld.mjs"
import { buildPageMetadata, buildSiteMetadata } from "./metadata.mjs"
import type { Discovery } from "./schema.mjs"

// The tests check the JSON against the schema, so this cast holds.
const discovery = discoveryJson as unknown as Discovery

export function siteMetadata(): Metadata {
  return buildSiteMetadata(discovery) as Metadata
}

export function pageMetadata(path: string): Metadata {
  return buildPageMetadata(discovery, path) as Metadata
}

export function homeJsonLd(): object {
  return buildJsonLd(discovery)
}

export function siteLanguage(): string {
  return discovery.language
}
