/** Renders one JSON-LD script tag from a plain object. */
import { safeJson } from "@/lib/seo/jsonld.mjs"

export default function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(data) }} />
}
