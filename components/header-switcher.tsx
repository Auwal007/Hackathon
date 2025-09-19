"use client"

import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"

// Decides whether to show the public SiteHeader based on the current route.
// We only render the SiteHeader on public pages like home, about, contact, auth, terms, privacy.
export function HeaderSwitcher() {
  const pathname = usePathname()

  // Public routes that should use the public SiteHeader
  const isPublic = (() => {
    if (!pathname) return true
    // Public roots
    if (
      pathname === "/" ||
      pathname.startsWith("/about") ||
      pathname.startsWith("/contact") ||
      pathname.startsWith("/terms") ||
      pathname.startsWith("/privacy") ||
      pathname.startsWith("/auth/")
    ) {
      return true
    }
    // Everything else (courses, settings, etc.) should NOT render SiteHeader here
    return false
  })()

  if (!isPublic) return null
  return <SiteHeader />
}
