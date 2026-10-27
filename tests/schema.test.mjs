/** Tests that the discovery schema accepts the real data and rejects each kind of bad data. */
import assert from "node:assert/strict"
import test from "node:test"
import { loadDiscovery } from "../lib/seo/load.mjs"
import { discoverySchema } from "../lib/seo/schema.mjs"

const GOOD = loadDiscovery()

function withBrand(change) {
  return { ...GOOD, brand: { ...GOOD.brand, ...change } }
}

function withPage(change) {
  return { ...GOOD, pages: [{ ...GOOD.pages[0], ...change }] }
}

const BAD_DATA = {
  "an unknown key": { ...GOOD, extra: 1 },
  "a url that is not a url": { ...GOOD, url: "not a url/" },
  "a url with no trailing slash": { ...GOOD, url: "https://example.com" },
  "a colour that is not hex": withBrand({ gradientStart: "red" }),
  "a page description that is too short": withPage({ description: "short" }),
  "a page path that is not a route": withPage({ path: "about" }),
}

test("the schema accepts data/discovery.json", () => {
  assert.equal(discoverySchema.safeParse(GOOD).success, true)
})

for (const [label, data] of Object.entries(BAD_DATA)) {
  test(`the schema rejects ${label}`, () => {
    assert.equal(discoverySchema.safeParse(data).success, false)
  })
}
