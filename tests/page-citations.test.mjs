/** Tests that the citation update changes the count and no other text, such as a "17" inside a title. */
import assert from "node:assert/strict"
import { execFileSync } from "node:child_process"
import test from "node:test"

const PAGE = 'title: "Drug with 17β-estradiol in women",\n      journal: "J",\n      citations: 17,\n    },\n'
const SETTER = "import json, sys; sys.path.insert(0, '.github/scripts'); from page_citations import set_citations; print(set_citations(*json.load(sys.stdin)), end='')"

function setCitations(content, title, citations) {
  return execFileSync("python3", ["-c", SETTER], { input: JSON.stringify([content, title, citations]), encoding: "utf8" })
}

test("a new count replaces only the count", () => {
  const result = setCitations(PAGE, "Drug with 17β-estradiol in women", 18)
  assert.equal(result, PAGE.replace("citations: 17", "citations: 18"))
})

test("a null count becomes a number", () => {
  const result = setCitations(PAGE.replace("17,", "null,"), "Drug with 17β-estradiol in women", 5)
  assert.match(result, /citations: 5,/)
})

test("a title that is not on the page changes nothing", () => {
  assert.equal(setCitations(PAGE, "Another title", 9), PAGE)
})
