/** Keeps the debug route out of search results, because its page is a client component. */
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = { robots: { index: false, follow: false } }

export default function DebugLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
