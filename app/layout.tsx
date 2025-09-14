import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SkillHub Nigeria - Learn Vocational Skills",
  description:
    "Master practical skills like baking, tailoring, and welding with offline-ready lessons designed for Nigerian learners.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["vocational skills", "Nigeria", "baking", "tailoring", "welding", "offline learning"],
  authors: [{ name: "SkillHub Nigeria" }],
  icons: {
    icon: "/icon-192x192.jpg",
    shortcut: "/icon-192x192.jpg",
    apple: "/icon-192x192.jpg",
  },
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  themeColor: "#059669",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
