# ClinPharmStats Website

A corporate website for clinical pharmacology and statistics consulting services built with Next.js and deployed on GitHub Pages.

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. A pull request runs lint, tests and build only. It does not deploy.

### Manual Deployment

If you need to deploy manually:

1. Build the site:
   ```bash
   npm run deploy
   ```

2. Push the changes to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

## Search and agent files

`data/discovery.json` is the one source. `npm run seo` writes the search and agent files and their images into `public/`. `npm test` fails when a generated file drifts from the source.

## Project Structure

- `app/` - Next.js app directory containing all pages and layouts
- `components/` - Reusable UI components
- `public/` - Static assets like images
- `lib/` - Utility functions and shared code
- `lib/seo/` - Generators for the search and agent files
- `data/` - The discovery data source
- `scripts/` - Commands that write files
- `tests/` - Tests, including the drift check

## Configuration

- GitHub Pages deployment is configured in `.github/workflows/github-pages-deploy.yml`
- Next.js configuration is in `next.config.mjs`