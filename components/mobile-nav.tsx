"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex items-center gap-2 md:hidden">
        <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 text-sm" asChild>
          <Link href="/auth/signup">Sign Up Free</Link>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/courses"
                className="text-lg font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t">
                <Link
                  href="/auth/login"
                  className="text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors py-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
