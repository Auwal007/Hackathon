import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#111828] text-white font-sans selection:bg-[#2aab1a] selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#111828]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#2aab1a] to-[#1e7e13] flex items-center justify-center shadow-lg shadow-[#2aab1a]/20 group-hover:shadow-[#2aab1a]/40 transition-all duration-300">
              <span className="font-bold text-xl text-white">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-[#2aab1a] transition-colors">My Makaranta</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-gray-300 hover:text-[#2aab1a] transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium text-[#2aab1a] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-[#2aab1a] transition-colors">
              Contact
            </Link>
            <Button className="bg-[#2aab1a] hover:bg-[#228b15] text-white rounded-full px-6">
              Download App
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2aab1a]/10 rounded-full blur-[100px] -z-10"></div>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="text-[#2aab1a]">Touch</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about My Makaranta? Interested in partnering with us? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-[#0f1623]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-gray-400 mb-8">
                                Reach out to us directly through any of these channels.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-[#2aab1a]/10 text-[#2aab1a] flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email Us</h4>
                                        <p className="text-gray-400">hello@mymakaranta.ng</p>
                                        <p className="text-gray-400">support@mymakaranta.ng</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-[#2aab1a]/10 text-[#2aab1a] flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Call Us</h4>
                                        <p className="text-gray-400">+234 800 MAKARANTA</p>
                                        <p className="text-gray-400">+234 123 456 7890</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-[#2aab1a]/10 text-[#2aab1a] flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Visit Us</h4>
                                        <p className="text-gray-400">
                                            123 Innovation Drive,<br />
                                            Yaba, Lagos,<br />
                                            Nigeria
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#1f2937] p-8 rounded-3xl border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">First Name</label>
                                    <Input className="bg-[#111828] border-white/10 text-white placeholder:text-gray-600 focus:border-[#2aab1a] focus:ring-[#2aab1a]" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                                    <Input className="bg-[#111828] border-white/10 text-white placeholder:text-gray-600 focus:border-[#2aab1a] focus:ring-[#2aab1a]" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email Address</label>
                                <Input className="bg-[#111828] border-white/10 text-white placeholder:text-gray-600 focus:border-[#2aab1a] focus:ring-[#2aab1a]" placeholder="john@example.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <Textarea className="bg-[#111828] border-white/10 text-white placeholder:text-gray-600 focus:border-[#2aab1a] focus:ring-[#2aab1a] min-h-[150px]" placeholder="How can we help you?" />
                            </div>
                            <Button className="w-full bg-[#2aab1a] hover:bg-[#228b15] text-white h-12 text-lg">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0f1623] pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-[#2aab1a] flex items-center justify-center">
                    <span className="font-bold text-lg text-white">M</span>
                  </div>
                  <span className="text-xl font-bold">My Makaranta</span>
                </div>
                <p className="text-gray-400 max-w-sm">
                  Empowering the next generation of Nigerians with quality education and practical vocational skills.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-6">Product</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><Link href="/features" className="hover:text-[#2aab1a] transition-colors">Features</Link></li>
                  <li><Link href="/courses" className="hover:text-[#2aab1a] transition-colors">Courses</Link></li>
                  <li><Link href="#" className="hover:text-[#2aab1a] transition-colors">Success Stories</Link></li>
                  <li><Link href="#" className="hover:text-[#2aab1a] transition-colors">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Company</h4>
                <ul className="space-y-4 text-gray-400">
                  <li><Link href="/about" className="hover:text-[#2aab1a] transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-[#2aab1a] transition-colors">Contact</Link></li>
                  <li><Link href="#" className="hover:text-[#2aab1a] transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-[#2aab1a] transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <p>© 2025 My Makaranta. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
