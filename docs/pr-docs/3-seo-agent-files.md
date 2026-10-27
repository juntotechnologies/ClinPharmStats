# PR 3: Search and agent files

Status: open
Branch: `feature/seo-agent-files`

## Goal

Make the site easy to find for search engines and AI agents. Keep every fact in one JSON source.

## Summary

- [x] Add `data/discovery.json` as the one source for name, URL, summary, services, pages, crawlers and agent rules.
- [x] Generate `robots.txt`, `sitemap.xml`, `llms.txt`, `agents.txt` and `.well-known/agents.json` into `public/`.
- [x] Generate a 1200x630 `og.png` and an `apple-touch-icon.png`.
- [x] Give each page its own title, description, canonical link, Open Graph tags and Twitter tags.
- [x] Add JSON-LD (`ProfessionalService` and `WebSite`) to the home page. It holds no email address.
- [x] Add a drift check to `npm test`. Run lint and tests in the deploy workflow.
- [x] Fix `npm run lint`. `next lint` no longer exists in Next 16, so lint uses a flat ESLint config.
- [x] Remove two skipped heading levels. Remove the placeholder Google verification tag.

## Agent rules

Agents may read pages and follow links. Agents may not post a form, send a message, book a call, or send a resume for a person.

## Checks

- `npm run lint`, `npm test` and `npm run build` pass.
- After the deploy, each discovery URL returns 200 with the right content type.
