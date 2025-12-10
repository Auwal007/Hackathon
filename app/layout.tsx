import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"
import { AuthRedirectHandler } from "@/components/auth-redirect-handler"
import { ChatWidget } from "@/components/chat-widget"
import { HeaderSwitcher } from "@/components/header-switcher"

export const metadata: Metadata = {
  title: "My Makaranta - Quality Education for Every Nigerian Child",
  description:
    "Empowering the next generation of Nigerians with quality education (WAEC, NECO, JAMB) and practical vocational skills through offline-ready learning technology.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["education", "Nigeria", "WAEC", "NECO", "JAMB", "vocational skills", "offline learning"],
  authors: [{ name: "My Makaranta" }],
  icons: {
    icon: "/skill-hub-logo-removebg-preview.png",
    shortcut: "/skill-hub-logo-removebg-preview.png",
    apple: "/skill-hub-logo-removebg-preview.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  shrinkToFit: "no",
  viewportFit: "cover",
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
        <Suspense fallback={null}>
          <AuthRedirectHandler />
          {/* <HeaderSwitcher /> */}
          {children}
          {/* <ChatWidget /> */}
        </Suspense>
      </body>
    </html>
  )
}
