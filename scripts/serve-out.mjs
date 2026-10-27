/** Command `node scripts/serve-out.mjs`: serves the exported site in out/ and maps each route to its index.html. */
import express from "express"
import { existsSync } from "node:fs"
import { dirname, extname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const OUT = join(ROOT, "out")
const HOME = join(OUT, "index.html")
const NOT_FOUND = join(OUT, "404.html")
const PORT = process.env.PORT || 3000

function withTrailingSlash(path) {
  return path.endsWith("/") || extname(path) ? path : `${path}/`
}

function routeOf(url) {
  return withTrailingSlash(url.split("?")[0])
}

function pageOf(route) {
  const page = route === "/" ? HOME : join(OUT, route, "index.html")
  return existsSync(page) ? page : null
}

function respond(req, res) {
  const page = pageOf(routeOf(req.url))
  if (page) return res.sendFile(page)
  if (existsSync(NOT_FOUND)) return res.status(404).sendFile(NOT_FOUND)
  return res.sendFile(HOME)
}

function listening() {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log("Press Ctrl+C to stop the server")
}

function main() {
  const app = express()
  app.use(express.static(OUT))
  app.get("*", respond)
  app.listen(PORT, listening)
}

main()
