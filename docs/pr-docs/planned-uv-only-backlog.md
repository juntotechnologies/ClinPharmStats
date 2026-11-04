# PR planned: uv-only backlog

Status: planned

Branch: `chore/uv-only-backlog`

## Goal

The daily citation workflow starts Python only through `uv`. No tracked file breaks the `uv-only` lint rule.

## Context

The `uv-only` rule lints changed lines only. A full scan (`ops check --all --lint-only`) finds 4 older hits, all in `.github/workflows/update-publications.yml`: `actions/setup-python`, `python -m pip install`, `python -m py_compile`, `python <script>`.

## Implementation Checklist

### Tier 1 - Workflow

- [ ] Replace `actions/setup-python` with `astral-sh/setup-uv` (same pin as swarm-infra, Python 3.12).
- [ ] Drop the `pip install` step. `uv run --with-requirements requirements.txt` installs the same pinned set.
- [ ] `py_compile` and the PubMed script run through `uv run --no-project`.

## Smoke Tests

Not applicable: no UI, no site change. Covered by:

| Check | Covered by |
|---|---|
| Both scripts run under uv with the pinned set | local run of the converted commands |
| Workflow file valid, job passes | `workflow_dispatch` on this branch (deploy job is main-only) |
| Site lint, tests, build unchanged | `npm run lint`, `npm test` |
| No uv-only hit left | `ops check --all --lint-only` |

## Product Decisions

- Keep the pinned `requirements.txt` set for the whole job. Same packages as before.
- The Scholar script stays local-only. The workflow still does not run it.

## Scope

- 4 of 4 `uv-only` hits.

## Non-Goals

- No change to the deploy workflow, citation logic or `requirements.txt`.

## Rollback

- Revert the merge commit. The next scheduled run uses the old steps.
