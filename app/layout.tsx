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
  title: "SkillHub Nigeria - Learn Vocational Skills",
  description:
    "Master practical skills like baking, tailoring, and welding with offline-ready lessons designed for Nigerian learners.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: ["vocational skills", "Nigeria", "baking", "tailoring", "welding", "offline learning"],
  authors: [{ name: "SkillHub Nigeria" }],
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
          <HeaderSwitcher />
          {children}
          <ChatWidget />
        </Suspense>
      </body>
    </html>
  )
}
