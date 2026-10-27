# data/

`discovery.json` is the one source for name, URL, summary, services, pages, crawlers and agent rules.

- `lib/seo/schema.mjs` validates the file. A bad value stops `npm run seo` and the tests.
- Take each claim from the live pages. `tests/seo.test.mjs` checks the claims against `app/`.
- Never write an email address, a prospect name or outreach data in this file.
