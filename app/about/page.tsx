"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Download, BookOpen, Award, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <Badge variant="outline" className="mb-3 text-emerald-600 border-emerald-200">About</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold">SkillHub Nigeria</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            A lightweight, offline‑ready learning platform that helps Nigerians build practical, income‑friendly skills.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What we believe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                Access to skills should not depend on constant internet or expensive devices. SkillHub is built as a
                Progressive Web App so you can download lessons and learn anywhere—at home, in the workshop, or on the
                bus.
              </p>
              <p>
                The content focuses on real Nigerian opportunities—baking, fashion, welding and more—so learners can
                apply lessons quickly and start earning.
              </p>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Wifi className="h-5 w-5 text-emerald-600" />
                <CardTitle className="text-base">Offline‑first</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Download lessons and keep learning without data. Your progress is saved on your device.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Download className="h-5 w-5 text-emerald-600" />
                <CardTitle className="text-base">Lightweight</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Fast on low‑end phones. Works well on limited connectivity and small data plans.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <CardTitle className="text-base">Practical courses</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Step‑by‑step lessons focused on real work and local business opportunities.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex-row items-center gap-3">
                <Award className="h-5 w-5 text-emerald-600" />
                <CardTitle className="text-base">Certificates</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Finish a course to unlock proof of completion you can share with employers or clients.
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <Shield className="h-5 w-5 text-emerald-600" />
              <CardTitle className="text-base">How your data is handled</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                This app uses localStorage on your device for login info and downloads. A service worker may cache
                lessons for offline use. We don’t require a server to use the core features.
              </p>
              <p>
                See our <Link href="/privacy" className="text-emerald-600 underline">Privacy Policy</Link> for details.
              </p>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Start learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/courses">Browse courses</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-3">
              <Users className="h-5 w-5 text-emerald-600" />
              <CardTitle className="text-base">Who is it for?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Students, apprentices, small business owners, and anyone ready to learn a hands‑on skill.
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  )
}
