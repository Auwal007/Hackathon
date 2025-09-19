"use client"

import Link from "next/link"
import { UserMenu } from "@/components/user-menu"
import { InnerPageMobileNav } from "@/components/inner-page-mobile-nav"
import { useAuth } from "@/components/auth-guard"
import { User } from "lucide-react"

export function InnerPageHeader() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">
              SkillHub Nigeria
            </Link>
          </div>
          
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

          <div className="flex items-center gap-4">
            {/* <div className="hidden md:flex items-center gap-2 text-sm">
              <User className="h-4 w-4" />
              <span>Welcome, {user.name || user.email}</span>
            </div> */}
            <div className="hidden md:block">
              <UserMenu />
            </div>
            
            {/* Mobile Navigation */}
            <InnerPageMobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}