"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, BookOpen } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { auth } from "@/app/firebase/config"
import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence, 
  browserLocalPersistence,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  // Handle redirect result for Google sign-in (fallback)
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
      } catch (err) {
        const msg = mapFirebaseError(err)
        if (mounted) setError(msg)
      }
    })()
    return () => {
      mounted = false
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      setIsLoading(false)
      return
    }

    try {
      // Ensure auth persists across sessions (works with our localStorage AuthGuard)
      await setPersistence(auth, browserLocalPersistence)

      // Create account with Firebase
      const cred = await createUserWithEmailAndPassword(auth, email, password)

      // Set display name
      if (cred.user && name) {
        await updateProfile(cred.user, { displayName: name })
      }

      // Mirror minimal user data to localStorage for existing AuthGuard
      const storedUser = {
        id: cred.user.uid,
        name: cred.user.displayName || name || "",
        email: cred.user.email || email,
      }
      localStorage.setItem("skillhub_user", JSON.stringify(storedUser))

      // Send verification email (ignore failure silently, user can resend)
      try {
        await sendEmailVerification(cred.user)
      } catch {}

      router.push("/auth/verify-email")
    } catch (err: unknown) {
      // Map Firebase auth errors to user-friendly messages
      const message = (() => {
        if (typeof err === "object" && err && "code" in err) {
          const code = (err as { code?: string }).code || ""
          switch (code) {
            case "auth/email-already-in-use":
              return "This email is already registered. Try logging in."
            case "auth/invalid-email":
              return "Please enter a valid email address."
            case "auth/weak-password":
              return "Password is too weak. Try a stronger one."
            case "auth/network-request-failed":
              return "Network error. Check your connection and try again."
            case "auth/operation-not-allowed":
              return "Email/password accounts are not enabled for this project."
            default:
              return "Something went wrong. Please try again."
          }
        }
        return "Something went wrong. Please try again."
      })()
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogle = async () => {
    setError("")
    setIsLoading(true)
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: "select_account" })
    try {
      await setPersistence(auth, browserLocalPersistence)
      const res = await signInWithPopup(auth, provider)
      const u = res.user
      const stored = {
        id: u.uid,
        name: u.displayName || u.email?.split("@")[0] || "",
        email: u.email || "",
      }
      localStorage.setItem("skillhub_user", JSON.stringify(stored))
      router.push("/courses")
    } catch (err: unknown) {
      if (typeof err === "object" && err && "code" in err) {
        const code = (err as { code?: string }).code || ""
        if (code === "auth/popup-blocked" || code === "auth/popup-closed-by-user") {
          try {
            await signInWithRedirect(auth, provider)
            return
          } catch (e) {
            setError(mapFirebaseError(e))
          }
        } else {
          setError(mapFirebaseError(err))
        }
      } else {
        setError("Could not continue with Google. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  function mapFirebaseError(err: unknown): string {
    if (typeof err === "object" && err && "code" in err) {
      const code = (err as { code?: string }).code || ""
      switch (code) {
        case "auth/account-exists-with-different-credential":
          return "An account already exists with a different sign-in method. Try logging in with that method."
        case "auth/popup-blocked":
          return "Popup was blocked. We’ll try a full-page redirect."
        case "auth/popup-closed-by-user":
          return "Popup closed before completing sign-in."
        case "auth/cancelled-popup-request":
          return "Popup canceled. Please try again."
        case "auth/network-request-failed":
          return "Network error. Check your connection and try again."
        default:
          return "Something went wrong. Please try again."
      }
    }
    return "Something went wrong. Please try again."
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Join SkillHub and start learning today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Account
            </Button>
            <div className="my-4 text-center text-xs text-muted-foreground">or</div>
            <Button type="button" variant="outline" className="w-full" onClick={handleGoogle} disabled={isLoading}>
              <GoogleIcon className="mr-2 h-4 w-4" /> Continue with Google
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 533.5 544.3" aria-hidden="true" focusable="false" {...props}>
      <path fill="#4285F4" d="M533.5 278.4c0-18.6-1.7-37-5.2-54.8H272.1v103.8h147c-6.3 34.1-25.8 63-55 82.4v68h88.9c52.1-48 80.5-118.8 80.5-199.4z"/>
      <path fill="#34A853" d="M272.1 544.3c73.5 0 135.2-24.3 180.3-66.1l-88.9-68c-24.7 16.6-56.5 26.6-91.4 26.6-70 0-129.3-47.1-150.6-110.3h-92v69.3c44.8 89 136.6 148.5 242.6 148.5z"/>
      <path fill="#FBBC05" d="M121.5 326.5c-10.6-31.7-10.6-66 0-97.7v-69.3h-92c-39.2 77.9-39.2 158.4 0 236.3l92-69.3z"/>
      <path fill="#EA4335" d="M272.1 107.7c37.9-.6 74.3 13.5 101.9 39.6l76.1-76.1C406.6 24.2 340.7-.8 272.1 0 166.1 0 74.3 59.5 29.5 148.5l92 69.3c21.2-63.2 80.6-110.1 150.6-110.1z"/>
    </svg>
  )
}
