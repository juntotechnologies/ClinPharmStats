/** Escapes text for use inside XML and SVG. */
const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }

function escapeChar(char) {
  return ESCAPES[char]
}

export function escapeXml(text) {
  return text.replace(/[&<>"]/g, escapeChar)
}
