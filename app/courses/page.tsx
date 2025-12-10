"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AuthGuard, useAuth } from "@/components/auth-guard"
import { InnerPageHeader } from "@/components/inner-page-header"
import { Calculator, BookOpen, FlaskConical, ChefHat, Scissors, Wrench, Clock, Users, Star } from "lucide-react"
import Link from "next/link"

function CoursesContent() {
  const { user } = useAuth()

  const courses = [
    {
      id: "maths-waec",
      title: "WAEC Mathematics",
      description: "Complete preparation for WAEC/NECO Mathematics exams",
      icon: Calculator,
      lessons: 24,
      duration: "12 hours",
      rating: 4.9,
      progress: 0,
      available: true,
      difficulty: "Intermediate",
    },
    {
      id: "english-waec",
      title: "English Language",
      description: "Master essay writing and comprehension for exams",
      icon: BookOpen,
      lessons: 20,
      duration: "10 hours",
      rating: 4.8,
      progress: 0,
      available: true,
      difficulty: "Intermediate",
    },
    {
      id: "science-basic",
      title: "Integrated Science",
      description: "Core scientific concepts for Junior Secondary",
      icon: FlaskConical,
      lessons: 15,
      duration: "8 hours",
      rating: 4.7,
      progress: 0,
      available: true,
      difficulty: "Beginner",
    },
    {
      id: "baking",
      title: "Vocational: Baking",
      description: "Master the fundamentals of bread, cakes & pastries",
      icon: ChefHat,
      lessons: 12,
      duration: "4 hours",
      rating: 4.8,
      progress: 0,
      available: false,
      difficulty: "Beginner",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <InnerPageHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Learning Dashboard</h1>
          <p className="text-muted-foreground">Access your exam preparation materials and vocational courses</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Active Subjects</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">0h</p>
                  <p className="text-sm text-muted-foreground">Learning Time</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Certificates Earned</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <Card key={course.id} className="group hover:shadow-lg transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {course.difficulty}
                          </Badge>
                        </div>
                      </div>
                      {!course.available && <Badge variant="outline">Coming Soon</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{course.description}</CardDescription>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{course.lessons} lessons</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                        </div>
                      </div>

                      {course.progress > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}
                    </div>

                    <Button className="w-full" asChild={course.available} disabled={!course.available}>
                      {course.available ? (
                        <Link href={`/courses/${course.id}`}>
                          {course.progress > 0 ? "Continue Learning" : "Start Course"}
                        </Link>
                      ) : (
                        <span>Coming Soon</span>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Learning Tips */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Learning Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Download lessons for offline learning when you have good internet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Practice regularly - even 15 minutes daily makes a difference</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Complete quizzes to test your understanding and earn certificates</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function CoursesPage() {
  return (
    <AuthGuard>
      <CoursesContent />
    </AuthGuard>
  )
}
