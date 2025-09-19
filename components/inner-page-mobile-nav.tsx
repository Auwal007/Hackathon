"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut, LayoutDashboard, Settings } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-guard"

export function InnerPageMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  if (!user) return null

  return (
    <>
      <div className="flex items-center gap-2 md:hidden">
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4" />
          <span className="max-w-24 truncate">{user.name || user.email}</span>
        </div>
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
                  href="/courses"
                  className="text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors py-2 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/settings"
                  className="text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors py-2 flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-lg font-medium text-red-600 hover:text-red-700 transition-colors py-2 flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}