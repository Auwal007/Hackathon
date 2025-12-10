"use client"

import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Wifi, WifiOff } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [isSimulatedOffline, setIsSimulatedOffline] = useState(false)

  const toggleOfflineMode = () => {
    const newState = !isSimulatedOffline
    setIsSimulatedOffline(newState)
    
    // Dispatch events to simulate online/offline behavior
    if (newState) {
      window.dispatchEvent(new Event("offline"))
    } else {
      window.dispatchEvent(new Event("online"))
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl text-[#2aab1a]">
            <div className="h-10 w-10 md:h-14 md:w-14 flex-shrink-0 flex items-center justify-center">
              <div className="h-10 w-10 rounded-xl bg-[#2aab1a] flex items-center justify-center shadow-lg shadow-[#2aab1a]/20">
                <span className="font-bold text-xl text-white">M</span>
              </div>
            </div>
            <span className="whitespace-nowrap text-base md:text-xl">My Makaranta</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mx-auto">
            <Link href="/features" className="font-medium hover:text-[#2aab1a] transition-colors">
              Features
            </Link>
            <Link href="/courses" className="font-medium hover:text-[#2aab1a] transition-colors">
              Courses
            </Link>
            <Link href="/about" className="font-medium hover:text-[#2aab1a] transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-medium hover:text-[#2aab1a] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons & Offline Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleOfflineMode}
              className={isSimulatedOffline ? "bg-red-50 text-red-600 border-red-200" : "text-emerald-600 border-emerald-200"}
              title="Simulate Offline Mode for Demo"
            >
              {isSimulatedOffline ? <WifiOff className="h-4 w-4 mr-2" /> : <Wifi className="h-4 w-4 mr-2" />}
              {isSimulatedOffline ? "Offline Mode" : "Online"}
            </Button>

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
