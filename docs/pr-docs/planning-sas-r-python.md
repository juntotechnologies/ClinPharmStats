# Planning: SAS/R/Python wording standardization

Summary
-------
This PR standardizes wording across the site to the `SAS/R/Python` ordering and contains the small content edits already made (home, services, careers, about, layout). This planning doc captures applicable SEO/usability/performance items from the provided feedback that we can act on now or in follow-up PRs.

What changed (already applied)
- Updated wording to `SAS/R/Python` in the following files:
  - `app/page.tsx`
  - `app/services/page.tsx`
  - `app/careers/page.tsx`
  - `app/about/page.tsx`
  - `app/layout.tsx` (metadata description)

Immediate actionable items (applicable from feedback)
- [ ] Title tag length: verify `metadata.title` in `app/layout.tsx` is 50–60 characters and adjust if needed.
- [ ] Meta description length: verify `metadata.description` (in `app/layout.tsx`) is 120–160 characters; update to a concise marketing description if required.
- [ ] H1/H headings audit: ensure each page has a single primary `h1` and logical `h2`–`h6` hierarchy. Files to check: `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/careers/page.tsx`.
- [ ] Image alt attributes: audit `public/images/` and `app/**/*.{tsx,jsx}` for images without `alt` text and add descriptive alt text.
- [ ] Canonical tags & hreflang: ensure canonical URL is present (check `app/layout.tsx` metadata alternates) and add `hreflang` if we plan to target multiple locales.
- [ ] Robots & sitemap: confirm `app/robots.ts` and `sitemap.ts` exist and are correct for production; update if any development routes are exposed.
- [ ] Schema.org: add Organization schema to main HTML metadata (in `app/layout.tsx`) to improve identity signals.
- [ ] Analytics: add Google Analytics / GA4 snippet or server-side tracking (if desired); create environment variables for tracking ID.
- [ ] Performance quick wins: optimize large images in `public/images/`, enable Brotli/Gzip on hosting, and audit bundle sizes with `next build`.

Lower-priority / out-of-scope for this PR
- Backlink building, external outreach, and server-level HTTP/2 configuration require non-repo actions or infra changes.

Next steps
1. Run a content audit to collect precise character counts for title & description. (small CLI script or manual)
2. Implement suggested metadata edits in `app/layout.tsx` and any page-specific head overrides.
3. Create a follow-up PR for image alt text and schema additions.

Notes
- This doc is intentionally focused on repo-applicable items from the supplied feedback PDF.

Prepared by: Shaun / ClinPharmStats
Date: 2026-05-21
