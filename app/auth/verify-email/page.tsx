"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Mail } from "lucide-react"
import { auth } from "@/app/firebase/config"
import { onAuthStateChanged, sendEmailVerification, reload } from "firebase/auth"

export default function VerifyEmailPage() {
  const [email, setEmail] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState<string>("")
  const [error, setError] = useState<string>("")
  const router = useRouter()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      setIsLoading(false)
      if (!fbUser) {
        router.push("/auth/login")
        return
      }
      setEmail(fbUser.email || "")
      if (fbUser.emailVerified) {
        router.push("/courses")
      }
    })
    return () => unsub()
  }, [router])

  const resend = async () => {
    setError("")
    setInfo("")
    const user = auth.currentUser
    if (!user) return
    try {
      await sendEmailVerification(user)
      setInfo("Verification email sent. Check your inbox (and spam folder).")
    } catch (e) {
      setError("Could not send verification email. Please try again.")
    }
  }

  const continueIfVerified = async () => {
    const user = auth.currentUser
    if (!user) return router.push("/auth/login")
    try {
      await reload(user)
      if (user.emailVerified) {
        router.push("/courses")
      } else {
        setError("Email not verified yet. Please check your inbox.")
      }
    } catch {
      setError("Could not refresh verification status. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Verify your email</CardTitle>
          <CardDescription>We sent a verification link to {email || "your email"}.</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {info && (
            <Alert className="mb-4">
              <AlertDescription>{info}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            <Button className="w-full" onClick={resend} disabled={isLoading}>
              Resend verification email
            </Button>
            <Button variant="secondary" className="w-full" onClick={continueIfVerified} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}I have verified, continue
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => router.push("/auth/login")}>Back to Login</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
