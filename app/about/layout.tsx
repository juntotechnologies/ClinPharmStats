/** Sets the page metadata of the About route, because its page is a client component. */
import { pageMetadata } from "@/lib/seo/next"
import type React from "react"

export const metadata = pageMetadata("/about/")

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
