/** Declares the shape of data/discovery.json once, so every reader gets a typed and validated object. */
import { z } from "zod"

const NON_EMPTY = z.string().min(1)
const SENTENCES = z.array(NON_EMPTY).min(1)
const HEX_COLOR = z.string().regex(/^#[0-9A-Fa-f]{6}$/)
const PAGE_PATH = z.string().regex(/^\/([a-z-]+\/)?$/)
const SOURCE_PATH = z.string().regex(/^app(\/[a-z-]+|\/page\.tsx)$/)

const brandSchema = z
  .object({
    mark: NON_EMPTY,
    gradientStart: HEX_COLOR,
    gradientEnd: HEX_COLOR,
    logoPath: NON_EMPTY,
    faviconPath: NON_EMPTY,
    touchIconPath: NON_EMPTY,
    touchIconSize: z.literal(180),
  })
  .strict()

const addressSchema = z
  .object({ street: NON_EMPTY, city: NON_EMPTY, region: NON_EMPTY, postalCode: NON_EMPTY, country: NON_EMPTY })
  .strict()

const serviceSchema = z.object({ name: NON_EMPTY, summary: NON_EMPTY, items: SENTENCES }).strict()

const pageSchema = z
  .object({
    path: PAGE_PATH,
    name: NON_EMPTY,
    title: z.string().min(10).max(70),
    description: z.string().min(60).max(170),
    source: SOURCE_PATH,
  })
  .strict()

const openSourceSchema = z.object({ name: NON_EMPTY, url: z.string().url(), summary: NON_EMPTY }).strict()

const agentsSchema = z
  .object({ summary: NON_EMPTY, may: SENTENCES, mayNot: SENTENCES, contactPath: PAGE_PATH })
  .strict()

const ogSchema = z
  .object({ path: NON_EMPTY, width: z.literal(1200), height: z.literal(630), card: NON_EMPTY, type: NON_EMPTY })
  .strict()

export const discoverySchema = z
  .object({
    name: NON_EMPTY,
    alternateName: NON_EMPTY,
    url: z.string().url().endsWith("/"),
    language: NON_EMPTY,
    locale: NON_EMPTY,
    author: NON_EMPTY,
    foundingYear: z.string().regex(/^\d{4}$/),
    tagline: NON_EMPTY,
    summary: NON_EMPTY,
    profile: SENTENCES,
    keywords: SENTENCES,
    brand: brandSchema,
    address: addressSchema,
    services: z.array(serviceSchema).min(1),
    engagement: SENTENCES,
    pages: z.array(pageSchema).min(1),
    openSource: z.array(openSourceSchema),
    crawlers: SENTENCES,
    agents: agentsSchema,
    og: ogSchema,
  })
  .strict()

/** @typedef {z.infer<typeof discoverySchema>} Discovery */
/** @typedef {Discovery["pages"][number]} Page */
/** @typedef {Discovery["services"][number]} Service */
