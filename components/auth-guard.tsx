"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "@/app/firebase/config"

interface User {
  id: string
  name: string
  email: string
}

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // If offline, fallback to localStorage mirror
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      try {
        const userData = localStorage.getItem("skillhub_user")
        if (userData) {
          setUser(JSON.parse(userData))
        } else {
          router.push("/auth/login")
        }
      } finally {
        setIsLoading(false)
      }
      return
    }

    // Online: rely on Firebase auth state
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      try {
        if (!fbUser) {
          localStorage.removeItem("skillhub_user")
          router.push("/auth/login")
          setUser(null)
          return
        }

        const mirrored = {
          id: fbUser.uid,
          name: fbUser.displayName || "",
          email: fbUser.email || "",
        }
        localStorage.setItem("skillhub_user", JSON.stringify(mirrored))
        setUser(mirrored)

        // Gate unverified users to verify-email page (only enforce online)
        if (fbUser.email && !fbUser.emailVerified) {
          router.push("/auth/verify-email")
        }
      } finally {
        setIsLoading(false)
      }
    })

    return () => unsub()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Keep hook in sync with Firebase auth; fallback to localStorage when offline
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      const userData = localStorage.getItem("skillhub_user")
      if (userData) setUser(JSON.parse(userData))
      return
    }

    const unsub = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const mirrored = {
          id: fbUser.uid,
          name: fbUser.displayName || "",
          email: fbUser.email || "",
        }
        localStorage.setItem("skillhub_user", JSON.stringify(mirrored))
        setUser(mirrored)
      } else {
        localStorage.removeItem("skillhub_user")
        setUser(null)
      }
    })
    return () => unsub()
  }, [])

  const logout = async () => {
    try {
      await signOut(auth)
    } catch {}
    localStorage.removeItem("skillhub_user")
    setUser(null)
    window.location.href = "/"
  }

  return { user, logout }
}
