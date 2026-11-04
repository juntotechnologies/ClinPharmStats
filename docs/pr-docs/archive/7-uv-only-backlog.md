# PR 7: uv-only backlog

Status: done

Branch: `chore/uv-only-backlog`

## Goal

The daily citation workflow and its scripts start Python only through `uv`. No tracked file breaks the `uv-only` lint rule.

## Context

The `uv-only` rule lints changed lines only. A full scan (`ops check --all --lint-only`) found 4 hits, all in `.github/workflows/update-publications.yml`: `actions/setup-python`, `python -m pip install`, `python -m py_compile`, `python <script>`. The checker then gained the shebang rule (agent-skills PR 56): 2 more hits, `#!/usr/bin/env python3` in `.github/scripts/*.py`.

## Implementation Checklist

### Tier 1 - Tests first

- [x] `tests/uv-python.test.mjs`: the workflow sets up uv and never `setup-python`, every workflow command that names Python starts with `uv run`, every script shebang is the uv one. The shebang test failed first.

### Tier 2 - Workflow and scripts

- [x] Replace `actions/setup-python` with `astral-sh/setup-uv` (same pin as swarm-infra, Python 3.12).
- [x] Drop the `pip install` step. `uv run --with-requirements requirements.txt` installs the same pinned set.
- [x] `py_compile` and the PubMed script run through `uv run --no-project`.
- [x] Line 1 of the 2 scripts becomes `#!/usr/bin/env -S uv run --script`.

## Smoke Tests

Not applicable: no UI, no site change. Covered by:

| Check | Covered by |
|---|---|
| Both scripts run under uv with the pinned set | local run of the converted commands |
| Workflow file valid, job passes | `workflow_dispatch` on this branch (deploy job is main-only) |
| Site lint, tests, build unchanged | `npm run lint`, `npm test`, PR check |
| No uv-only hit left | `ops check --all --lint-only` |

## Product Decisions

- Keep the pinned `requirements.txt` set for the whole job. Same packages as before.
- The Scholar script stays local-only. The workflow still does not run it.
- The shebang is the uv one only. A direct run still needs the pinned packages, as with `python3` before.

## Scope

- 6 of 6 `uv-only` hits.
- Proved:
  - Converted commands run locally under uv with the pinned set. The PubMed run reports "No change needed" for both found records and leaves the tree clean.
  - `workflow_dispatch` on this branch: run 41754416997 passed (28 s), no bot commit, no deploy.
  - `npm run lint` clean. `npm test` 32 of 32.

## Non-Goals

- No change to the deploy workflow, citation logic or `requirements.txt`.
- `tests/page-citations.test.mjs:10` still runs `python3`. The lint gate does not read `.mjs`, so it is not a hit. A fix needs `setup-uv` in the verify job of the deploy workflow. Decision pending (Shaun).

## Rollback

- Revert the merge commit. The next scheduled run uses the old steps.
