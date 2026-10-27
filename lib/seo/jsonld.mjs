/** Builds the JSON-LD graph: one ProfessionalService and one WebSite. It holds no email address. */
import { absoluteUrl } from "./urls.mjs"

function organizationId(discovery) {
  return `${discovery.url}#organization`
}

function postalAddress({ address }) {
  return {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  }
}

function serviceOffer(service) {
  const itemOffered = { "@type": "Service", name: service.name, description: service.summary }
  return { "@type": "Offer", itemOffered }
}

function serviceCatalog(discovery) {
  return { "@type": "OfferCatalog", name: "Services", itemListElement: discovery.services.map(serviceOffer) }
}

function serviceName(service) {
  return service.name
}

function organizationFacts(discovery) {
  return {
    name: discovery.name,
    alternateName: discovery.alternateName,
    url: discovery.url,
    description: discovery.summary,
    foundingDate: discovery.foundingYear,
  }
}

function organizationMedia(discovery) {
  return { logo: absoluteUrl(discovery, discovery.brand.logoPath), image: absoluteUrl(discovery, discovery.og.path) }
}

function buildOrganization(discovery) {
  return {
    "@type": "ProfessionalService",
    "@id": organizationId(discovery),
    ...organizationFacts(discovery),
    ...organizationMedia(discovery),
    address: postalAddress(discovery),
    knowsAbout: discovery.services.map(serviceName),
    hasOfferCatalog: serviceCatalog(discovery),
  }
}

function buildWebSite(discovery) {
  return {
    "@type": "WebSite",
    "@id": `${discovery.url}#website`,
    url: discovery.url,
    name: discovery.name,
    description: discovery.summary,
    inLanguage: discovery.language,
    publisher: { "@id": organizationId(discovery) },
  }
}

/** @param {import("./schema.mjs").Discovery} discovery */
export function buildJsonLd(discovery) {
  return { "@context": "https://schema.org", "@graph": [buildOrganization(discovery), buildWebSite(discovery)] }
}

/** Serializes JSON for a script tag. It escapes the less-than sign so the data cannot close the tag. */
export function safeJson(value) {
  return JSON.stringify(value, null, 2).replace(/</g, "\\u003c")
}
