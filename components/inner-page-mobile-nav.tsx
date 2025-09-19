"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-guard"

export function InnerPageMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()

  if (!user) return null

  return (
    <>
      <div className="flex items-center md:hidden">
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2 min-h-[44px]">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden z-50">
          <div className="px-4 py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/courses"
                className="text-base font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="text-base font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}