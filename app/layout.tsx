import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ClinPharmStats - Biostatistics & Clinical Research Services",
  description:
    "Expert services in biostatistics, statistical programming, and clinical research for pharmaceutical and biotechnology companies. Specializing in SAS programming, clinical trials analysis, and FDA submissions.",
  generator: 'Next.js',
  keywords: [
    "biostatistics",
    "clinical research",
    "statistical programming",
    "SAS programming",
    "clinical trials",
    "pharmaceutical statistics",
    "FDA submissions",
    "CDISC",
    "clinical data analysis",
    "biotech statistics"
  ],
  authors: [{ name: "Shaun Porwal" }],
  creator: "ClinPharmStats",
  publisher: "ClinPharmStats",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://clinpharmstats.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ClinPharmStats - Biostatistics & Clinical Research Services",
    description: "Expert services in biostatistics, statistical programming, and clinical research for pharmaceutical and biotechnology companies.",
    url: 'https://clinpharmstats.com',
    siteName: 'ClinPharmStats',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClinPharmStats - Biostatistics & Clinical Research Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ClinPharmStats - Biostatistics & Clinical Research Services",
    description: "Expert biostatistics and clinical research services for pharma and biotech.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg' },
    ],
    apple: [
      { url: '/favicon.svg' },
    ],
  },
  verification: {
    google: 'your-google-site-verification-code', // You'll need to add this
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 