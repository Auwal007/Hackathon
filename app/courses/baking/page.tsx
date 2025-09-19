"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AuthGuard, useAuth } from "@/components/auth-guard"
import { InnerPageHeader } from "@/components/inner-page-header"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChefHat, ArrowLeft, Play, Download, CheckCircle, Clock, Users, Star, Wifi, WifiOff } from "lucide-react"
import Link from "next/link"

function BakingCourseContent() {
  const { user } = useAuth()
  const [isOnline, setIsOnline] = useState(true)
  const [downloadedLessons, setDownloadedLessons] = useState<string[]>([])

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Load downloaded lessons from localStorage
    const downloaded = localStorage.getItem("skillhub_downloaded_lessons")
    if (downloaded) {
      setDownloadedLessons(JSON.parse(downloaded))
    }

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const lessons = [
    {
      id: "lesson-1",
      title: "Introduction to Baking",
      description: "Learn the basic principles and essential tools for baking",
      duration: "15 min",
      type: "video",
      completed: false,
    },
    {
      id: "lesson-2",
      title: "Understanding Ingredients",
      description: "Flour, yeast, salt, and water - the foundation of bread",
      duration: "20 min",
      type: "video",
      completed: false,
    },
    {
      id: "lesson-3",
      title: "Kneading Techniques",
      description: "Master the art of kneading dough properly",
      duration: "25 min",
      type: "video",
      completed: false,
    },
    {
      id: "lesson-4",
      title: "Proofing and Rising",
      description: "How to know when your dough is ready",
      duration: "18 min",
      type: "video",
      completed: false,
    },
    {
      id: "lesson-5",
      title: "Baking Your First Loaf",
      description: "Step-by-step guide to baking perfect bread",
      duration: "30 min",
      type: "video",
      completed: false,
    },
  ]

  const downloadLesson = async (lessonId: string) => {
    // Simulate downloading lesson content
    const newDownloaded = [...downloadedLessons, lessonId]
    setDownloadedLessons(newDownloaded)
    localStorage.setItem("skillhub_downloaded_lessons", JSON.stringify(newDownloaded))

    // In a real app, this would cache video files, images, and text content
    console.log(`Downloaded lesson ${lessonId} for offline viewing`)
  }

  const isLessonDownloaded = (lessonId: string) => {
    return downloadedLessons.includes(lessonId)
  }

  const canAccessLesson = (lessonId: string) => {
    return isOnline || isLessonDownloaded(lessonId)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <InnerPageHeader />
      
      {/* Course Sub-Header */}
      <div className="border-b bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/courses">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Courses
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <ChefHat className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold">Baking Basics</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isOnline ? (
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <Wifi className="h-4 w-4" />
                  <span>Online</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-orange-600 text-sm">
                  <WifiOff className="h-4 w-4" />
                  <span>Offline</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Course Overview */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Offline Status Alert */}
            {!isOnline && (
              <Alert className="mb-6 border-orange-200 bg-orange-50">
                <WifiOff className="h-4 w-4" />
                <AlertDescription>
                  You're offline! You can still access downloaded lessons. Downloaded lessons are marked with a
                  checkmark.
                </AlertDescription>
              </Alert>
            )}

            {/* Lessons List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Course Lessons</h2>
              {lessons.map((lesson, index) => (
                <Card
                  key={lesson.id}
                  className={`transition-all ${
                    canAccessLesson(lesson.id) ? "hover:shadow-md cursor-pointer" : "opacity-60"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{lesson.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{lesson.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{lesson.duration}</span>
                            </div>
                            {isLessonDownloaded(lesson.id) && (
                              <div className="flex items-center gap-1 text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                <span>Downloaded</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isOnline && !isLessonDownloaded(lesson.id) && (
                          <Button variant="outline" size="sm" onClick={() => downloadLesson(lesson.id)}>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                        <Button size="sm" disabled={!canAccessLesson(lesson.id)} asChild={canAccessLesson(lesson.id)}>
                          {canAccessLesson(lesson.id) ? (
                            <Link href={`/courses/baking/lessons/${lesson.id}`}>
                              <Play className="h-4 w-4 mr-2" />
                              {lesson.completed ? "Review" : "Start"}
                            </Link>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Offline
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Course Sidebar */}
          <div className="space-y-6">
            {/* Course Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Completed</span>
                    <span>0/5 lessons</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">0h</p>
                    <p className="text-xs text-muted-foreground">Time Spent</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{downloadedLessons.length}</p>
                    <p className="text-xs text-muted-foreground">Downloaded</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Difficulty</span>
                  <Badge variant="secondary">Beginner</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="text-sm">4 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Students</span>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">1,250</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Offline Learning Tips */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Offline Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Download lessons when you have good internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Downloaded content works without internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Quizzes sync when you're back online</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BakingCoursePage() {
  return (
    <AuthGuard>
      <BakingCourseContent />
    </AuthGuard>
  )
}
