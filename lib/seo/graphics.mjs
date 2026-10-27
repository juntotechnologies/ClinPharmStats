/** Renders the SVG sources of the Open Graph image and the touch icon from the brand data. */
import { escapeXml } from "./xml.mjs"

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif"
const WHITE = "#FFFFFF"

function svgFrame(width, height, body) {
  const size = `width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"`
  return `<svg xmlns="http://www.w3.org/2000/svg" ${size}>${body.join("")}</svg>`
}

function gradientDefs({ brand }) {
  const stops = `<stop offset="0" stop-color="${brand.gradientStart}"/><stop offset="1" stop-color="${brand.gradientEnd}"/>`
  return `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient></defs>`
}

function background(width, height) {
  return `<rect width="${width}" height="${height}" fill="url(#g)"/>`
}

function label(x, y, style, content) {
  const font = `font-family="${FONT}" text-anchor="middle" fill="${WHITE}"`
  return `<text x="${x}" y="${y}" ${font} ${style}>${escapeXml(content)}</text>`
}

function badge(discovery) {
  const ring = `<circle cx="600" cy="170" r="76" fill="none" stroke="${WHITE}" stroke-width="6"/>`
  return ring + label(600, 194, 'font-size="64" font-weight="700"', discovery.brand.mark)
}

function domainName(discovery) {
  return new URL(discovery.url).hostname
}

/** The Open Graph image as SVG, at the size in data/discovery.json. */
export function renderOgSvg(discovery) {
  const { width, height } = discovery.og
  return svgFrame(width, height, [
    gradientDefs(discovery),
    background(width, height),
    badge(discovery),
    label(600, 360, 'font-size="96" font-weight="700"', discovery.name),
    label(600, 440, 'font-size="40"', discovery.tagline),
    label(600, 570, 'font-size="28" opacity="0.85"', domainName(discovery)),
  ])
}

/** The touch icon as SVG. It fills the square because iOS rounds the corners. */
export function renderTouchIconSvg(discovery) {
  const size = discovery.brand.touchIconSize
  return svgFrame(size, size, [
    gradientDefs(discovery),
    background(size, size),
    label(size / 2, size / 2 + 24, 'font-size="68" font-weight="700"', discovery.brand.mark),
  ])
}
