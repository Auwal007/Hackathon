import { Button } from "@/components/ui/button"
import { Download, Smartphone, Globe, CheckCircle, ArrowRight, Star, Shield, Zap, Users, WifiOff, BrainCircuit, Languages, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
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
            <Link href="/features" className="text-sm font-medium text-[#2aab1a] transition-colors">
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
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2aab1a]/10 rounded-full blur-[100px] -z-10"></div>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Built for <span className="text-[#2aab1a]">Success</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We didn't just build an app. We built a complete educational ecosystem designed to help you pass your exams and build a career.
            </p>
          </div>
        </section>

        {/* Feature 0: Academic Excellence */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <div className="h-16 w-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Passing WAEC and JAMB is the gateway to higher education. My Makaranta provides comprehensive study materials, past questions, and AI-driven tutoring for core subjects.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Complete Mathematics & English curriculum</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>10+ years of past questions & answers</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>CBT practice mode</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-purple-500/20 blur-3xl -z-10"></div>
                <div className="bg-[#1f2937] border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Mathematics (WAEC)</h3>
                        <span className="text-sm text-blue-400">85% Complete</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-[#111828] p-4 rounded-xl flex items-center justify-between border border-white/5">
                            <span className="text-sm">Algebraic Expressions</span>
                            <CheckCircle className="h-4 w-4 text-[#2aab1a]" />
                        </div>
                        <div className="bg-[#111828] p-4 rounded-xl flex items-center justify-between border border-white/5">
                            <span className="text-sm">Geometry & Trigonometry</span>
                            <CheckCircle className="h-4 w-4 text-[#2aab1a]" />
                        </div>
                        <div className="bg-[#111828] p-4 rounded-xl flex items-center justify-between border border-blue-500/30">
                            <span className="text-sm">Calculus Introduction</span>
                            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">In Progress</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1: Offline First */}
        <section className="py-20 bg-[#0f1623]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="h-16 w-16 rounded-2xl bg-[#2aab1a]/10 text-[#2aab1a] flex items-center justify-center mb-6">
                  <WifiOff className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">True Offline Capability</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Data is expensive. Connectivity is unreliable. That's why My Makaranta is built to work completely offline. Download entire courses—videos, quizzes, and resources—once, and access them forever without using a single byte of data.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-[#2aab1a]" />
                    <span>Smart compression for small download sizes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-[#2aab1a]" />
                    <span>Background downloading</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-[#2aab1a]" />
                    <span>Offline progress syncing</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2aab1a]/20 to-blue-500/20 blur-3xl -z-10"></div>
                <div className="bg-[#1f2937] border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <span className="text-sm font-mono text-gray-400">No Internet Connection</span>
                    </div>
                    <WifiOff className="text-gray-500" size={20} />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#111828] p-4 rounded-xl flex items-center gap-4">
                        <div className="h-12 w-12 bg-[#2aab1a]/20 rounded-lg flex items-center justify-center text-[#2aab1a]">
                            <Smartphone size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-sm">Baking Lesson 1.mp4</h4>
                            <p className="text-xs text-green-500">Playing from device storage</p>
                        </div>
                    </div>
                    <div className="bg-[#111828] p-4 rounded-xl flex items-center gap-4 opacity-50">
                        <div className="h-12 w-12 bg-gray-700 rounded-lg"></div>
                        <div className="flex-1">
                            <div className="h-4 w-32 bg-gray-700 rounded mb-2"></div>
                            <div className="h-3 w-20 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: AI Coach */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <div className="h-16 w-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                  <BrainCircuit className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Business Coach</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Learning the skill is only half the battle. Turning it into income is the other half. Our integrated AI coach helps you bridge that gap.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>Generate business plans instantly</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>Calculate profit margins & pricing</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>Draft marketing messages for WhatsApp</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 to-blue-500/20 blur-3xl -z-10"></div>
                <div className="bg-[#1f2937] border border-white/10 rounded-3xl p-6 shadow-2xl max-w-md mx-auto">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-600 flex-shrink-0"></div>
                        <div className="bg-[#374151] p-3 rounded-2xl rounded-tl-none text-sm text-gray-200">
                            I want to sell my bread. How much should I charge?
                        </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                        <div className="h-8 w-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center">
                            <BrainCircuit size={16} className="text-white" />
                        </div>
                        <div className="bg-purple-500/10 border border-purple-500/20 p-3 rounded-2xl rounded-tr-none text-sm text-gray-200">
                            Based on current flour prices in Lagos, if your cost is ₦800 per loaf, I recommend a price of ₦1,200 to ensure a 33% profit margin. Here is a breakdown...
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Local Languages */}
        <section className="py-20 bg-[#0f1623]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="h-16 w-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                  <Languages className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Native Language Support</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  We believe language shouldn't be a barrier to success. My Makaranta is built from the ground up to support Nigeria's diverse linguistic landscape.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1f2937] p-4 rounded-xl border border-white/5 text-center">
                        <span className="block text-2xl font-bold text-white mb-1">English</span>
                        <span className="text-xs text-gray-500">Default</span>
                    </div>
                    <div className="bg-[#1f2937] p-4 rounded-xl border border-white/5 text-center">
                        <span className="block text-2xl font-bold text-white mb-1">Hausa</span>
                        <span className="text-xs text-gray-500">Full Support</span>
                    </div>
                    <div className="bg-[#1f2937] p-4 rounded-xl border border-white/5 text-center opacity-50">
                        <span className="block text-2xl font-bold text-white mb-1">Yoruba</span>
                        <span className="text-xs text-gray-500">Coming Soon</span>
                    </div>
                    <div className="bg-[#1f2937] p-4 rounded-xl border border-white/5 text-center opacity-50">
                        <span className="block text-2xl font-bold text-white mb-1">Igbo</span>
                        <span className="text-xs text-gray-500">Coming Soon</span>
                    </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                 <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/20 blur-[80px] rounded-full"></div>
                    <div className="relative bg-[#111828] border border-gray-700 p-8 rounded-2xl shadow-2xl text-center max-w-sm">
                        <h3 className="text-2xl font-bold mb-2">Sannu! 👋</h3>
                        <p className="text-gray-400">Koyi yadda ake yin burodi da kek a yau.</p>
                        <Button className="mt-6 w-full bg-[#2aab1a] hover:bg-[#228b15]">
                            Fara Koyo (Start Learning)
                        </Button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Experience it yourself</h2>
                <Button size="lg" className="bg-[#2aab1a] hover:bg-[#228b15] text-white px-10 h-16 text-xl rounded-full shadow-xl shadow-[#2aab1a]/30">
                    Download App
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
  )
}
