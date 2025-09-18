"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/app/firebase/config"
import { getRedirectResult } from "firebase/auth"

export function AuthRedirectHandler() {
  const router = useRouter()

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const result = await getRedirectResult(auth)
        if (result && result.user && mounted) {
          const u = result.user
          const stored = {
            id: u.uid,
            name: u.displayName || u.email?.split("@")[0] || "",
            email: u.email || "",
          }
          localStorage.setItem("skillhub_user", JSON.stringify(stored))
          router.push("/courses")
        }
      } catch {
        // swallow: auth flow pages already surface errors
      }
    })()
    return () => {
      mounted = false
    }
  }, [router])

  return null
}
