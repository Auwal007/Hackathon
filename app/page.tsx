import { Button } from "@/components/ui/button"
import { RegisterSW } from "./register-sw"
import { Download, Smartphone, Globe, CheckCircle, ArrowRight, Star, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <RegisterSW />
      <div className="min-h-screen bg-[#111828] text-white flex flex-col font-sans selection:bg-[#2aab1a] selection:text-white">
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
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-[#2aab1a] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-[#2aab1a] transition-colors">
                Contact
              </Link>
              <Button className="bg-[#2aab1a] hover:bg-[#228b15] text-white rounded-full px-6">
                Download App
              </Button>
            </nav>
            {/* Mobile Menu Button Placeholder */}
            <button className="md:hidden text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1">
          <section className="relative pt-20 pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#2aab1a]/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 opacity-30"></div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8 text-center lg:text-left z-10">
                <div className="inline-flex items-center rounded-full border border-[#2aab1a]/30 bg-[#2aab1a]/10 px-4 py-1.5 text-sm font-medium text-[#2aab1a] backdrop-blur-sm animate-fade-in-up">
                  <span className="flex h-2 w-2 rounded-full bg-[#2aab1a] mr-2 animate-pulse"></span>
                  v2.0 Now Available
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Formal Education. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2aab1a] to-[#4ade80]">
                    Skills for Life.
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  The ultimate offline-first learning platform. Master core subjects for WAEC & JAMB, while learning practical vocational skills—no internet required.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                  <Button 
                    size="lg" 
                    className="bg-[#2aab1a] hover:bg-[#228b15] text-white px-8 h-14 text-lg w-full sm:w-auto shadow-lg shadow-[#2aab1a]/25 transition-all hover:scale-105 rounded-xl"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Get for Android
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/10 bg-white/5 text-white hover:bg-white/10 h-14 text-lg w-full sm:w-auto rounded-xl backdrop-blur-sm"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Get for iOS
                  </Button>
                </div>

                <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm font-medium text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-[#2aab1a]/20 text-[#2aab1a]"><CheckCircle className="h-3 w-3" /></div>
                    <span>WAEC & JAMB Prep</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-[#2aab1a]/20 text-[#2aab1a]"><CheckCircle className="h-3 w-3" /></div>
                    <span>Vocational Skills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-[#2aab1a]/20 text-[#2aab1a]"><CheckCircle className="h-3 w-3" /></div>
                    <span>100% Offline Mode</span>
                  </div>
                </div>
              </div>

              {/* 3D-ish App Mockup */}
              <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end perspective-1000">
                <div className="relative z-10 bg-[#0f1623] border-[10px] border-[#1f2937] rounded-[3rem] shadow-2xl overflow-hidden h-[700px] w-[350px] transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 ease-out shadow-[#2aab1a]/20">
                  {/* Screen Content */}
                  <div className="h-full w-full bg-[#111828] flex flex-col relative">
                    {/* Status Bar */}
                    <div className="h-8 bg-black/40 w-full absolute top-0 z-20 backdrop-blur-md flex items-center justify-between px-6">
                        <span className="text-[10px] font-bold text-white">9:41</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="pt-14 pb-6 px-6 bg-gradient-to-b from-[#111828] to-[#111828]/90 flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Welcome back</p>
                        <h3 className="text-white font-bold text-xl">Auwal</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2aab1a] to-[#1e7e13] p-[2px]">
                        <div className="h-full w-full rounded-full bg-[#111828] flex items-center justify-center">
                            <span className="text-[#2aab1a] font-bold">A</span>
                        </div>
                      </div>
                    </div>

                    {/* App Body */}
                    <div className="px-6 space-y-6 overflow-hidden flex-1">
                      {/* Progress Card */}
                      <div className="rounded-2xl bg-gradient-to-br from-[#2aab1a] to-[#166534] p-5 text-white shadow-lg shadow-[#2aab1a]/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-white/80 text-sm font-medium">Current Course</p>
                                    <h4 className="text-lg font-bold">Professional Baking</h4>
                                </div>
                                <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold">75%</div>
                            </div>
                            <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                                <div className="bg-white h-full w-3/4 rounded-full"></div>
                            </div>
                            <p className="text-xs text-white/80 mt-2">3 lessons remaining</p>
                        </div>
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#1f2937] p-4 rounded-2xl hover:bg-[#374151] transition-colors cursor-pointer group">
                            <div className="h-10 w-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Smartphone size={20} />
                            </div>
                            <h5 className="font-semibold text-sm">Offline Mode</h5>
                            <p className="text-xs text-gray-400">Active</p>
                        </div>
                        <div className="bg-[#1f2937] p-4 rounded-2xl hover:bg-[#374151] transition-colors cursor-pointer group">
                            <div className="h-10 w-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <Star size={20} />
                            </div>
                            <h5 className="font-semibold text-sm">AI Coach</h5>
                            <p className="text-xs text-gray-400">Ask now</p>
                        </div>
                      </div>

                      {/* Recommended */}
                      <div>
                        <h4 className="font-bold text-lg mb-3">Recommended</h4>
                        <div className="space-y-3">
                            <div className="bg-[#1f2937] p-3 rounded-xl flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-sm">Welding Basics</h5>
                                    <p className="text-xs text-gray-400">20 Lessons • 4h 30m</p>
                                </div>
                            </div>
                            <div className="bg-[#1f2937] p-3 rounded-xl flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-500">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-sm">Tailoring 101</h5>
                                    <p className="text-xs text-gray-400">15 Lessons • 3h 15m</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="h-20 bg-[#0f1623]/95 backdrop-blur border-t border-white/5 flex items-center justify-around px-6 pb-2">
                      <div className="flex flex-col items-center gap-1 text-[#2aab1a]">
                        <div className="h-10 w-10 rounded-xl bg-[#2aab1a]/10 flex items-center justify-center">
                            <Globe size={20} />
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
                        <Smartphone size={20} />
                      </div>
                      <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors">
                        <Users size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-24 bg-[#0f1623]">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
                <p className="text-gray-400 text-lg">We've packed My Makaranta with powerful features designed specifically for the Nigerian vocational landscape.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#1f2937]/50 border border-white/5 p-8 rounded-3xl hover:bg-[#1f2937] transition-colors group">
                  <div className="h-14 w-14 rounded-2xl bg-[#2aab1a]/10 text-[#2aab1a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Offline-First Architecture</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Download once, learn anywhere. Our proprietary compression technology lets you store hundreds of hours of video content without filling your phone.
                  </p>
                </div>
                <div className="bg-[#1f2937]/50 border border-white/5 p-8 rounded-3xl hover:bg-[#1f2937] transition-colors group">
                  <div className="h-14 w-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Star className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI Business Coach</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Not just skills—business. Our integrated AI helps you write business plans, calculate pricing, and find customers in your local area.
                  </p>
                </div>
                <div className="bg-[#1f2937]/50 border border-white/5 p-8 rounded-3xl hover:bg-[#1f2937] transition-colors group">
                  <div className="h-14 w-14 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Multi-Language Support</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Learn in the language you're most comfortable with. Full support for English, Hausa, Yoruba, and Igbo (coming soon).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#2aab1a]/10"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join thousands of Nigerian students and artisans building their future with My Makaranta.</p>
              <Button size="lg" className="bg-[#2aab1a] hover:bg-[#228b15] text-white px-10 h-16 text-xl rounded-full shadow-xl shadow-[#2aab1a]/30">
                Download Now - It's Free
              </Button>
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
    </>
  )
}
