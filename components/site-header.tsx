"use client"

import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-emerald-600">
            SkillHub Nigeria
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="font-medium hover:text-emerald-600 transition-colors">
              Courses
            </Link>
            <Link href="/about" className="font-medium hover:text-emerald-600 transition-colors">
              How It Works
            </Link>
            <Link href="/contact" className="font-medium hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login" className="font-medium hover:text-emerald-600 transition-colors">
              Login
            </Link>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600" asChild>
              <Link href="/auth/signup">Sign Up Free</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
