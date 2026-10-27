/** Sets the page metadata of the Open Source route, because its page is a client component. */
import { pageMetadata } from "@/lib/seo/next"
import type React from "react"

export const metadata = pageMetadata("/open-source/")

export default function OpenSourceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
