import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const contactPage = readFileSync(new URL("../app/contact/page.tsx", import.meta.url), "utf8")

test("contact form enables FormSubmit spam controls", () => {
  assert.doesNotMatch(contactPage, /formSubmitData\.append\('_captcha', 'false'\)/)
  assert.match(contactPage, /formSubmitData\.append\('_honey', honeypot\)/)
  assert.match(contactPage, /formSubmitData\.append\('_blacklist',/)
})

test("contact form does not accept employment attachments", () => {
  assert.doesNotMatch(contactPage, /type="file"/)
  assert.match(contactPage, /not accepting employment inquiries or unsolicited résumés/i)
})
