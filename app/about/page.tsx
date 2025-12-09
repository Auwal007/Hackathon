import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Heart, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2aab1a]/5 rounded-full blur-[120px] -z-10"></div>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    Bridging the <span className="text-[#2aab1a]">Education Gap</span> in Nigeria
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    My Makaranta was born from a simple observation: Millions of young Nigerians need access to quality formal education to pass exams like WAEC and JAMB, while also acquiring practical skills for economic independence.
                </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-[#0f1623]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-[#1f2937] p-8 rounded-3xl border border-white/5">
                        <div className="h-12 w-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                            <Target className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-400 leading-relaxed">
                            To democratize access to high-quality academic and vocational education. We leverage technology to overcome barriers of cost and connectivity, empowering Nigerians with both the certificates they need and the skills they can trade.
                        </p>
                    </div>
                    <div className="bg-[#1f2937] p-8 rounded-3xl border border-white/5">
                        <div className="h-12 w-12 bg-[#2aab1a]/10 text-[#2aab1a] rounded-xl flex items-center justify-center mb-6">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-400 leading-relaxed">
                            A Nigeria where every young person, regardless of their location or background, has the tools and knowledge to build a sustainable livelihood and contribute to the nation's economic growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* The Team */}
        <section className="py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-16">Built by Nigerians, for Nigeria</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="group">
                        <div className="h-48 w-48 mx-auto bg-gray-800 rounded-full mb-6 overflow-hidden border-4 border-[#1f2937] group-hover:border-[#2aab1a] transition-colors">
                            {/* Placeholder for team image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800"></div>
                        </div>
                        <h3 className="text-xl font-bold">Team Member 1</h3>
                        <p className="text-[#2aab1a]">Lead Developer</p>
                    </div>
                    <div className="group">
                        <div className="h-48 w-48 mx-auto bg-gray-800 rounded-full mb-6 overflow-hidden border-4 border-[#1f2937] group-hover:border-[#2aab1a] transition-colors">
                            {/* Placeholder for team image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800"></div>
                        </div>
                        <h3 className="text-xl font-bold">Team Member 2</h3>
                        <p className="text-[#2aab1a]">Product Designer</p>
                    </div>
                    <div className="group">
                        <div className="h-48 w-48 mx-auto bg-gray-800 rounded-full mb-6 overflow-hidden border-4 border-[#1f2937] group-hover:border-[#2aab1a] transition-colors">
                            {/* Placeholder for team image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800"></div>
                        </div>
                        <h3 className="text-xl font-bold">Team Member 3</h3>
                        <p className="text-[#2aab1a]">Content Strategist</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-[#2aab1a]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">50+</div>
                        <div className="text-green-100">Courses</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">10k+</div>
                        <div className="text-green-100">Students</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">3</div>
                        <div className="text-green-100">Languages</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">100%</div>
                        <div className="text-green-100">Offline Capable</div>
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
