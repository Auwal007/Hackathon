import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RegisterSW } from "./register-sw"
import { MobileNav } from "@/components/mobile-nav"
import {
  BookOpen,
  Users,
  Wifi,
  Award,
  ChefHat,
  Scissors,
  Wrench,
  Star,
  Play,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Trophy,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <RegisterSW />
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="font-bold text-xl text-emerald-600">
                SkillHub Nigeria
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
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

              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex items-center gap-4">
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

        <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center bg-black">
        <Image
  src="/young-nigerian-artisan-baker-working-confidently-i.jpg"
  alt="Young Nigerian artisan working confidently"
  fill
  className="object-cover object-top opacity-50 sm:opacity-60" // Crop from top instead of center
  priority
/>
          <div className="absolute inset-0 bg-black/70 sm:bg-black/60 z-[1]" />
          <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
            <div className="max-w-4xl text-center sm:text-left">
              <Badge
                variant="secondary"
                className="mb-4 sm:mb-6 bg-emerald-600 text-white border-emerald-500/50 text-sm sm:text-base"
              >
                <Wifi className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Offline-Ready Learning Platform
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-balance mb-6 sm:mb-8 text-white leading-tight">
                Transform Your Future with
                <span className="text-emerald-400 block mt-1 sm:mt-2">Nigerian Skills</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 text-pretty mb-8 sm:mb-10 max-w-3xl leading-relaxed">
                Master income-generating trades like baking, tailoring, and welding through expert-led lessons. Built
                for Nigeria, works everywhere - even offline!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 sm:px-8 text-lg font-semibold w-full sm:w-auto min-h-[56px]"
                  asChild
                >
                  <Link href="/courses">
                    <Play className="w-5 h-5 mr-2" />
                    Start Learning Free
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 px-6 py-4 sm:px-8 text-lg bg-transparent w-full sm:w-auto min-h-[56px]"
                  asChild
                >
                  <Link href="/about">
                    Watch Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-white/90 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Users className="w-5 h-5" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Globe className="w-5 h-5" />
                  <span>All 36 States</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
                Why Choose SkillHub Nigeria
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                Built for <span className="text-emerald-600">Nigerian</span> Success
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We understand the unique challenges facing Nigerian learners and entrepreneurs
              </p>
            </div>

            <div className="space-y-16 sm:space-y-20">
              {/* Feature 1 - Mobile: Image first, then content */}
              <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:space-y-0">
                <div className="relative">
                  <Image
                    src="/nigerian-student-learning-on-phone.png"
                    alt="Nigerian student learning on phone"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-emerald-500 text-white p-3 sm:p-4 rounded-xl shadow-lg">
                    <Wifi className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Works Completely Offline</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Download entire courses and learn without internet connection. Perfect for areas with unreliable
                    connectivity or expensive data plans.
                  </p>
                  <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Full course downloads</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Offline video playback</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Progress tracking without internet</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2 - Mobile: Image first, then content */}
              <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:space-y-0">
                <div className="relative lg:order-2">
                  <Image
                    src="/nigerian-craftsperson-working-with-hands-showing-p.jpg"
                    alt="Nigerian craftsperson working"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-blue-500 text-white p-3 sm:p-4 rounded-xl shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div className="text-center lg:text-left lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Practical, Income-Generating Skills</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Focus on trades that are in high demand across Nigeria. Every skill taught has direct earning
                    potential in the local economy.
                  </p>
                  <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Market-tested skills</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Local business opportunities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Entrepreneurship guidance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 - Mobile: Image first, then content */}
              <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:space-y-0">
                <div className="relative">
                  <Image
                    src="/nigerian-expert-teacher-demonstrating-craft-skills.jpg"
                    alt="Nigerian expert teacher"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-purple-500 text-white p-3 sm:p-4 rounded-xl shadow-lg">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Learn from Local Experts</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Our instructors are successful Nigerian craftspeople who understand your cultural context and
                    business environment.
                  </p>
                  <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Native language instruction</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Local market insights</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Cultural relevance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 4 - Mobile: Image first, then content */}
              <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:space-y-0">
                <div className="relative lg:order-2">
                  <Image
                    src="/nigerian-graduate-holding-certificate-with-pride-a.jpg"
                    alt="Nigerian graduate with certificate"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-orange-500 text-white p-3 sm:p-4 rounded-xl shadow-lg">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div className="text-center lg:text-left lg:order-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Earn Trusted Certificates</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    Get recognized credentials that employers and customers trust. Build your professional reputation
                    with verified skills.
                  </p>
                  <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Industry-recognized certificates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Digital portfolio building</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span>Professional networking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
                Popular Courses
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
                Start with High-Demand <span className="text-emerald-600">Skills</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These courses have the highest earning potential and job opportunities across Nigeria
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/beautiful-fresh-baked-bread-and-pastries-on-wooden.jpg"
                    alt="Fresh baked goods"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-500 text-white">Most Popular</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <ChefHat className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold">Professional Baking</CardTitle>
                  <CardDescription className="text-base">Bread, cakes, pastries & business setup</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Master commercial baking techniques with local recipes and business strategies. Start earning from
                    day one!
                  </p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>12 Hours</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>15 Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">4.9</span>
                      <span className="text-muted-foreground">(2,341)</span>
                    </div>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 w-full sm:w-auto min-h-[44px]" asChild>
                      <Link href="/courses/baking">Start Course</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/colorful-african-fabric-patterns-and-sewing-materi.jpg"
                    alt="African fabric and sewing materials"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-700 border-blue-200">
                      Coming Soon
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Scissors className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold">Fashion Design & Tailoring</CardTitle>
                  <CardDescription className="text-base">Traditional & modern clothing creation</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Create stunning African and contemporary fashion. Learn pattern making, fitting, and business
                    management.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>18 Hours</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>22 Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="text-muted-foreground">
                      <span>Launching March 2024</span>
                    </div>
                    <Button variant="outline" disabled className="w-full sm:w-auto min-h-[44px] bg-transparent">
                      Notify Me
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/welding-sparks-and-metal-fabrication-work-in-niger.jpg"
                    alt="Welding and metal fabrication"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-orange-500/20 text-orange-700 border-orange-200">
                      Coming Soon
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Wrench className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold">Professional Welding</CardTitle>
                  <CardDescription className="text-base">Metal fabrication & construction skills</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Master essential welding techniques for construction, automotive, and fabrication work. High-paying
                    skill set.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>24 Hours</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>20 Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="text-muted-foreground">
                      <span>Launching April 2024</span>
                    </div>
                    <Button variant="outline" disabled className="w-full sm:w-auto min-h-[44px] bg-transparent">
                      Notify Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600" />
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30">
                Join the Movement
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white text-balance leading-tight">
                Your Success Story
                <span className="block text-yellow-300">Starts Today!</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Join over 10,000 Nigerians who are already building profitable skills and transforming their financial
                future. No wahala, just results!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center mb-8 sm:mb-12">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-4 sm:px-8 text-lg font-semibold w-full sm:w-auto min-h-[56px]"
                  asChild
                >
                  <Link href="/courses">
                    <Play className="w-5 h-5 mr-2" />
                    Start Learning Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 px-6 py-4 sm:px-8 text-lg bg-transparent hover:border-white w-full sm:w-auto min-h-[56px]"
                  asChild
                >
                  <Link href="/about">
                    <Users className="w-5 h-5 mr-2" />
                    Join Community
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-white">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">10,000+</div>
                  <div className="text-white/80">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-white/80">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">₦500K+</div>
                  <div className="text-white/80">Average Monthly Earnings</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
              <div className="sm:col-span-2 lg:col-span-2">
                <h3 className="font-bold text-2xl text-emerald-400 mb-4">SkillHub Nigeria</h3>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Empowering Nigerians with practical, income-generating skills through innovative offline-ready
                  learning technology.
                </p>
                <div className="grid grid-cols-2 sm:flex gap-3 sm:gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent min-h-[44px]"
                  >
                    Facebook
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent min-h-[44px]"
                  >
                    Twitter
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent min-h-[44px]"
                  >
                    Instagram
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent min-h-[44px]"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-emerald-400">Courses</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <Link href="/courses/baking" className="hover:text-emerald-400 transition-colors block py-1">
                      Baking
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="hover:text-emerald-400 transition-colors block py-1">
                      Fashion Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="hover:text-emerald-400 transition-colors block py-1">
                      Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="hover:text-emerald-400 transition-colors block py-1">
                      All Courses
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-emerald-400">Company</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <Link href="/about" className="hover:text-emerald-400 transition-colors block py-1">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-emerald-400 transition-colors block py-1">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-emerald-400 transition-colors block py-1">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-emerald-400 transition-colors block py-1">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center sm:text-left">
                © 2024 SkillHub Nigeria. All rights reserved. Built with ❤️ for Nigeria.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <span>Made in Nigeria 🇳🇬</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
