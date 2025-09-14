import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RegisterSW } from "./register-sw"
import { BookOpen, Users, Wifi, Award, ChefHat, Scissors, Wrench } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <RegisterSW />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                Offline-Ready Learning
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold text-balance mb-6">
                Master <span className="text-primary">Vocational Skills</span> That Pay
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
                Learn practical trades like baking, tailoring, and welding with hands-on lessons designed for Nigeria's
                real economy. No stress, even offline!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/courses">Start Learning Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose SkillHub?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built specifically for Nigerian learners with real challenges in mind
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Works Offline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Download lessons and learn without internet. Perfect for areas with poor connectivity.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Practical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Focus on income-generating trades that match Nigeria's job market and economy.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Local Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn from experienced Nigerian craftspeople who understand your context.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Earn Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get recognized credentials that employers and customers trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
              <p className="text-muted-foreground">Start with these high-demand skills</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ChefHat className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Baking Basics</CardTitle>
                      <CardDescription>Bread, cakes & pastries</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master the fundamentals of baking with step-by-step video lessons and local recipes.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">12 Lessons</Badge>
                    <Button size="sm" asChild>
                      <Link href="/courses/baking">Start Course</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Scissors className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Fashion Design</CardTitle>
                      <CardDescription>Tailoring & sewing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn to create beautiful clothing from measurements to finished garments.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Coming Soon</Badge>
                    <Button size="sm" variant="outline" disabled>
                      Notify Me
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Welding Skills</CardTitle>
                      <CardDescription>Metal fabrication</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Essential welding techniques for construction and repair work.
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">Coming Soon</Badge>
                    <Button size="sm" variant="outline" disabled>
                      Notify Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of Nigerians learning valuable skills that create real income opportunities.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/courses">Browse All Courses</Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-primary">SkillHub Nigeria</h3>
                <p className="text-sm text-muted-foreground">Empowering Nigeria through practical skills</p>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
