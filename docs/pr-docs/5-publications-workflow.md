# PR 5: Make the daily citation update run

Status: underway
Branch: `fix/update-publications-workflow`

## Goal

The "Update Publications" workflow runs each day and keeps the citation counts on `/scholarship` current. It never changes any other text.

## Summary

- [x] Use `actions/checkout@v4` and `actions/setup-python@v5`. Install with `pip` from `requirements.txt`. The old `uv pip install` step needs a virtual environment.
- [x] Give the job `contents: write` and `actions: write`. The default token is read-only, so the push failed.
- [x] Start the deploy workflow after a commit. A push with the default token starts no workflow.
- [x] Pin `bibtexparser==1.4.3`. `scholarly` 1.7.11 cannot import version 2.
- [x] Drop the Google Scholar step. Scholar blocks GitHub runners: "Cannot Fetch from Google Scholar" after 14 minutes of retries.
- [x] Fix a data bug. The PubMed script replaced every "17" in the match when a count went from 17 to 18. It changed "17β-estradiol" to "18β-estradiol" in a title. A pure helper (`page_citations.py`) now sets only the count.
- [x] Add `tests/page-citations.test.mjs`. It fails when the update touches any other text.

## Verification

| Check | Method | Result |
| --- | --- | --- |
| First run | `workflow_dispatch` on this branch | Failed: `bibtexparser` import |
| Second run | Same, with the pin | Failed: Scholar blocked |
| Third run | Same, without Scholar | Passed. It exposed the title bug. |
| Fourth run | Same, with the bug fixed | Passed. The bot commit changed two counts and no title. |
| `npm run lint` and `npm test` | Local | 29 tests pass |

Every run used the branch, so no run changed `main`.

## Decisions

- Scholar needs a proxy that costs money. Run `.github/scripts/update_publications.py` on a local machine when the Scholar list changes.
- The two counts in the branch commit (14 to 20, 17 to 18) come from PubMed. They reach `main` with this PR.

## Smoke Tests

- [ ] After the merge, run the workflow on `main` by hand. It prints "No change." and passes.
- [ ] Open `/scholarship` on the live site after the next deploy. Every title reads as before.
