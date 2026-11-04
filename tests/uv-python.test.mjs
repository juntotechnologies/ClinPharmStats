/** Tests that Python starts only through uv: the update workflow steps and the shebang of each Python script. */
import assert from "node:assert/strict"
import { readdirSync, readFileSync } from "node:fs"
import test from "node:test"
import { parse } from "yaml"

const UV_SHEBANG = "#!/usr/bin/env -S uv run --script"
const SCRIPTS = new URL("../.github/scripts/", import.meta.url)
const workflow = parse(readFileSync(new URL("../.github/workflows/update-publications.yml", import.meta.url), "utf8"))
const steps = Object.values(workflow.jobs).flatMap(stepsOf)

function stepsOf(job) {
  return job.steps
}

function usedAction(step) {
  return String(step.uses ?? "")
}

function command(step) {
  return step.run ?? ""
}

function isPythonScript(name) {
  return name.endsWith(".py")
}

function shebangOf(name) {
  const [first] = readFileSync(new URL(name, SCRIPTS), "utf8").split("\n")
  return first.startsWith("#!") ? first : UV_SHEBANG
}

function hasWrongShebang(name) {
  return shebangOf(name) !== UV_SHEBANG
}

function mentionsPython(text) {
  return /\b(python3?|pip3?)\b/.test(text)
}

function isSetupUv(action) {
  return action.startsWith("astral-sh/setup-uv@")
}

function isSetupPython(action) {
  return action.startsWith("actions/setup-python")
}

test("the update workflow sets up uv and never setup-python", () => {
  const actions = steps.map(usedAction)
  assert.ok(actions.some(isSetupUv))
  assert.ok(!actions.some(isSetupPython))
})

test("every workflow command that names Python starts with uv run", () => {
  const commands = steps.map(command).filter(mentionsPython)
  assert.ok(commands.length > 0)
  for (const text of commands) assert.match(text, /^uv run /)
})

test("every Python script has the uv shebang or none", () => {
  assert.deepEqual(readdirSync(SCRIPTS).filter(isPythonScript).filter(hasWrongShebang), [])
})
