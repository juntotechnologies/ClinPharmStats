# PR 4: Deploy only from main, clean lint, clear audit

Status: in review
Branch: `chore/ci-lint-deps-cleanup`

## Goal

Stop a pull request from publishing the site. Remove every lint warning. Clear every dependency alert. Keep the pages the same.

## Summary

- [x] Split the deploy workflow into a read-only `verify` job and a `deploy` job. `deploy` runs only on a push to `main` or a by-hand run on `main`.
- [x] Add `tests/workflow-deploy.test.mjs`. It fails when a pull request can run a job that publishes.
- [x] Fix all 25 lint warnings with no disable comments. Run lint with `--max-warnings 0`.
- [x] Move `server.js` to `scripts/serve-out.mjs`. `start-server.sh` now calls it and no longer writes its own copy.
- [x] Remove the unlinked `/debug` page.
- [x] Clear every `npm audit` finding. Add `tests/schema.test.mjs` for the zod 4 change.
- [x] Document in `AGENTS.md` that CI runs the drift check before every deploy.

## Why

PR 3 ran the deploy job on a `pull_request` event. The run at 13:23 UTC on 2026-10-27 pushed to `gh-pages`. An open PR could change the live site.

## Dependency changes

| Package | Change | Why |
| --- | --- | --- |
| next | 16.2.6 to 16.4.3 | Five critical and several high alerts. In range. |
| express | 4.22.2 to 4.22.3 | Fixes `qs`, `body-parser`, `proxy-addr`. In range. |
| brace-expansion override | 1.1.13 to 1.1.21 | The pin held a vulnerable version. |
| sharp (dev) | 0.33.5 to 0.35.5 | libvips alerts. The regenerated images are pixel-identical. |
| zod | 3.24 to 4.6.7 | High alert. Major version. One schema file uses it. |
| yaml (dev) | new, 2.9.1 | The workflow test parses YAML. |

Other in-range packages (`postcss`, `source-map-js`, `postcss-selector-parser`) update through the lockfile.

## Checks

- [x] `npm run lint` (0 warnings), `npm test` (26 pass), `npm run build` and `npm audit` (0 vulnerabilities) pass in a clean export that used `npm ci --legacy-peer-deps`.
- [x] The workflow test fails on the old workflow and passes on the new one.
- [x] Built HTML is the same as before after asset hashes are removed. The CSS drops five utility classes that only `server.js` text produced.
- [x] 64 screenshots (8 pages, 4 widths, light and dark) are pixel-identical to the build before this change.
- [x] `scripts/serve-out.mjs` answers 19 URLs the same as the old `server.js`.
- [ ] The PR run does not start a `deploy` job.
- [ ] After the merge, the deploy runs, the live site returns 200 and `/.well-known/agents.json` still answers.

## Not in this PR

- `Update Publications` is disabled by GitHub after 60 days of no runs. It edits page copy. Shaun decides whether to enable it.
- Majors left alone: React 19, Tailwind 4, TypeScript 7, ESLint 10, Express 5. None has an open alert.
