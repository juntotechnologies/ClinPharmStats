/** Builds Next.js metadata objects from data/discovery.json for the site and for each page. */
import { absoluteUrl, findPage } from "./urls.mjs"

const ROBOTS = {
  index: true,
  follow: true,
  googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
}

function imageAlt(discovery) {
  return `${discovery.name}: ${discovery.tagline}`
}

function ogImage(discovery) {
  const { og } = discovery
  return { url: absoluteUrl(discovery, og.path), width: og.width, height: og.height, alt: imageAlt(discovery) }
}

function iconMetadata({ brand }) {
  return {
    icon: [{ url: brand.faviconPath, type: "image/svg+xml" }],
    apple: [{ url: brand.touchIconPath, sizes: `${brand.touchIconSize}x${brand.touchIconSize}` }],
  }
}

/** Defaults for every page. Each page sets its own title, description and canonical link. */
export function buildSiteMetadata(discovery) {
  const home = findPage(discovery, "/")
  return {
    metadataBase: new URL(discovery.url),
    title: home.title,
    description: home.description,
    keywords: discovery.keywords,
    authors: [{ name: discovery.author }],
    creator: discovery.name,
    publisher: discovery.name,
    formatDetection: { email: false, telephone: false },
    robots: ROBOTS,
    icons: iconMetadata(discovery),
  }
}

function openGraph(discovery, page) {
  return {
    title: page.title,
    description: page.description,
    url: absoluteUrl(discovery, page.path),
    siteName: discovery.name,
    locale: discovery.locale,
    type: discovery.og.type,
    images: [ogImage(discovery)],
  }
}

function twitter(discovery, page) {
  const { url, alt } = ogImage(discovery)
  return { card: discovery.og.card, title: page.title, description: page.description, images: [{ url, alt }] }
}

/** The title, description, canonical link, Open Graph and Twitter tags of one page. */
export function buildPageMetadata(discovery, path) {
  const page = findPage(discovery, path)
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(discovery, page.path) },
    openGraph: openGraph(discovery, page),
    twitter: twitter(discovery, page),
  }
}
