import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const contactPage = readFileSync(new URL("../app/contact/page.tsx", import.meta.url), "utf8")

test("contact page does not expose a submission form or FormSubmit endpoint", () => {
  assert.doesNotMatch(contactPage, /<form/)
  assert.doesNotMatch(contactPage, /formsubmit\.co/i)
})

test("contact page retains direct business contact and hiring guidance", () => {
  assert.match(contactPage, /mailto:shaun\.porwal@gmail\.com/)
  assert.match(contactPage, /not accepting employment inquiries or unsolicited résumés/i)
})
