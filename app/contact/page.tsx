"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Have questions or feedback? Reach out—we’re happy to hear from you.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <Mail className="h-5 w-5 text-emerald-600" />
            <CardTitle className="text-base">Email</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Send us a message and we’ll get back to you.</p>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <a href="mailto:hello@skillhub.ng">hello@skillhub.ng</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <MessageSquare className="h-5 w-5 text-emerald-600" />
            <CardTitle className="text-base">Chat</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>Prefer chat? Send us a DM and we’ll respond shortly.</p>
            <Button variant="outline" asChild>
              <Link href="/">Coming soon</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2">
          <CardHeader className="flex-row items-center gap-3">
            <Phone className="h-5 w-5 text-emerald-600" />
            <CardTitle className="text-base">Phone</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            For now, our support is email‑first. Phone support may be available later.
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}
