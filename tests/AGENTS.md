# tests/

Run `npm test`. The tests use no network.

- `seo-drift.test.mjs` fails when a generated file differs from `data/discovery.json`. Fix it with `npm run seo`.
- `seo.test.mjs` checks crawlers, agent rules, pages, claims, sentence length and the absence of email addresses.
- Never write a prospect or customer name in a test.
