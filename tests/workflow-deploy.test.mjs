/** Tests that a pull request never deploys: only a push or a by-hand run on main may publish the site. */
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { parse } from "yaml"

const DEPLOY_ACTION = "JamesIves/github-pages-deploy-action"
const MAIN_ONLY = /github\.ref == 'refs\/heads\/main'/
const NOT_PULL_REQUEST = /github\.event_name != 'pull_request'/

const workflow = parse(readFileSync(new URL("../.github/workflows/github-pages-deploy.yml", import.meta.url), "utf8"))
const jobs = Object.entries(workflow.jobs).map(([name, job]) => ({ name, ...job }))

function usesDeployAction(job) {
  return job.steps.some((step) => String(step.uses ?? "").startsWith(DEPLOY_ACTION))
}

function canWrite(job) {
  return Object.values(job.permissions ?? {}).includes("write")
}

function mayPublish(job) {
  return usesDeployAction(job) || canWrite(job)
}

function guardedAgainstPullRequest(job) {
  return MAIN_ONLY.test(job.if ?? "") && NOT_PULL_REQUEST.test(job.if ?? "")
}

test("the workflow runs on pull requests, so the checks run before a merge", () => {
  assert.ok("pull_request" in workflow.on)
})

test("the workflow never uses pull_request_target", () => {
  assert.ok(!("pull_request_target" in workflow.on))
})

test("at least one job deploys the site", () => {
  assert.ok(jobs.some(usesDeployAction))
})

test("every job that can publish runs only on main and never on a pull request", () => {
  for (const job of jobs.filter(mayPublish)) {
    assert.ok(guardedAgainstPullRequest(job), `job ${job.name} can publish and needs an if that blocks pull_request`)
  }
})

test("every job that can publish waits for a job that runs the checks", () => {
  for (const job of jobs.filter(mayPublish)) assert.ok(job.needs, `job ${job.name} must name the job it needs`)
})
