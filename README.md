# Alpha Stats Inc Website

A corporate website for Alpha Stats Inc built with Next.js and deployed on GitHub Pages.

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

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

## Project Structure

- `app/` - Next.js app directory containing all pages and layouts
- `components/` - Reusable UI components
- `public/` - Static assets like images
- `lib/` - Utility functions and shared code

## Configuration

- GitHub Pages deployment is configured in `.github/workflows/github-pages-deploy.yml`
- Next.js configuration is in `next.config.mjs`