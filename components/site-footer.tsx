import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  // Configure your real social handles via environment variables
  // (set on Netlify or your host):
  // NEXT_PUBLIC_FACEBOOK_URL, NEXT_PUBLIC_X_URL, NEXT_PUBLIC_INSTAGRAM_URL, NEXT_PUBLIC_WHATSAPP_URL
  const SOCIAL = {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://facebook.com",
    x: process.env.NEXT_PUBLIC_X_URL ?? "https://x.com",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/",
  }
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0f1623] text-white py-12 sm:py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#2aab1a] flex items-center justify-center">
                <span className="font-bold text-lg text-white">M</span>
              </div>
              <h3 className="font-bold text-2xl text-white">My Makaranta</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Empowering the next generation of Nigerians with quality education and practical vocational skills.
            </p>
            <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-[#2aab1a] min-h-[44px]" asChild>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  Facebook
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-[#2aab1a] min-h-[44px]" asChild>
                <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                  X
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-[#2aab1a] min-h-[44px]" asChild>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  Instagram
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-[#2aab1a] min-h-[44px]" asChild>
                <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-[#2aab1a] transition-colors block py-1">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#2aab1a] transition-colors block py-1">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2aab1a] transition-colors block py-1">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2aab1a] transition-colors block py-1">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#2aab1a] transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2aab1a] transition-colors block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#2aab1a] transition-colors block py-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#2aab1a] transition-colors block py-1">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center sm:text-left">© {year} My Makaranta. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Made in Nigeria 🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
