"use client"

import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl text-emerald-600">
            <div className="h-10 w-10 md:h-14 md:w-14 flex-shrink-0 flex items-center justify-center">
              <img
                src="/skill-hub-logo-removebg-preview.png"
                alt="SkillHub Nigeria Logo"
                className="h-10 w-10 md:h-14 md:w-14 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="whitespace-nowrap text-base md:text-xl">SkillHub Nigeria</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
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
