# lib/seo/

Pure functions that turn `data/discovery.json` into the discovery files, the page metadata and the JSON-LD.

- Each renderer takes the validated `Discovery` object and returns a string or an object.
- Only `load.mjs`, `lastmod.mjs` and `raster.mjs` touch the file system, git or the image library.
- `next.ts` is the one link to Next.js. Pages call `pageMetadata("/path/")` from it.
- Add a file to `files.mjs` when a new generated file is needed. The drift test then covers it.
