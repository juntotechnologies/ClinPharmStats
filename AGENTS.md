# ClinPharmStats site

Static Next.js site for clinpharmstats.com. GitHub Pages serves the `out/` export from the `gh-pages` branch.

## Commands

| Command | Job |
| --- | --- |
| `npm run seo` | Write the discovery files and images into `public/` from `data/discovery.json`. |
| `npm run lint` | Run ESLint, including the code shape limits in `code-shape.json`. |
| `npm test` | Run the tests, including the drift check on generated files. |
| `npm run build` | Export the site into `out/`. |

## Rules

- `data/discovery.json` holds every discovery fact. Edit it, run `npm run seo`, commit the result.
- Never edit a file that `npm run seo` writes. `lib/seo/files.mjs` lists them.
- Page title, description and canonical link come from `data/discovery.json` through `lib/seo/next.ts`.
- Write copy in ASD-STE100. Use sentences of 20 words or fewer. Take every claim from the live pages. The tests check both.
- Never write an email address in a generated file, in JSON-LD or in metadata.
- Never commit contact lists, prospect names or outreach data. This repo is public.
- Code: one job per function, no nested functions, 15 lines or fewer, one-line docstring at the top of each file.
- Merge to `main` triggers the deploy. Shaun allows the agent to merge for this repo.
