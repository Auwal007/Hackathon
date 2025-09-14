"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AuthGuard } from "@/components/auth-guard"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, WifiOff, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

function LessonContent() {
  const params = useParams()
  const lessonId = params.lessonId as string
  const [isPlaying, setIsPlaying] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [lessonCompleted, setLessonCompleted] = useState(false)

  useEffect(() => {
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // Mock lesson data - in real app, this would come from your backend/cache
  const lessonData = {
    "lesson-1": {
      title: "Introduction to Baking",
      description: "Learn the basic principles and essential tools for baking",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Demo video
      content: `
        <h2>Welcome to Baking Basics!</h2>
        <p>No stress! We go start this journey together. Baking na art wey anybody fit learn if you get patience and practice.</p>
        
        <h3>What You Go Learn</h3>
        <ul>
          <li>Basic baking principles</li>
          <li>Essential tools and equipment</li>
          <li>How to measure ingredients properly</li>
          <li>Understanding oven temperatures</li>
        </ul>

        <h3>Essential Baking Tools</h3>
        <p>Before we start, make sure you get these basic tools:</p>
        <ul>
          <li><strong>Measuring cups and spoons</strong> - Accuracy na key for baking</li>
          <li><strong>Mixing bowls</strong> - Different sizes dey help</li>
          <li><strong>Wooden spoon or spatula</strong> - For mixing ingredients</li>
          <li><strong>Baking pans</strong> - Start with basic loaf pan</li>
          <li><strong>Kitchen scale</strong> - If you fit get am, e go help well well</li>
        </ul>

        <div class="tip-box">
          <h4>💡 Pro Tip</h4>
          <p>Always read the entire recipe before you start. This way, you no go surprise for middle of baking!</p>
        </div>

        <h3>Basic Baking Principles</h3>
        <p>Baking na science. Unlike cooking where you fit adjust as you dey go, baking need precision:</p>
        <ol>
          <li><strong>Measure accurately</strong> - Too much or too little fit spoil everything</li>
          <li><strong>Follow the order</strong> - The way you mix ingredients matter</li>
          <li><strong>Temperature matters</strong> - Both oven and ingredients</li>
          <li><strong>Timing na everything</strong> - Don't rush the process</li>
        </ol>
      `,
    },
    "lesson-2": {
      title: "Understanding Ingredients",
      description: "Flour, yeast, salt, and water - the foundation of bread",
      duration: "20 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: `
        <h2>The Four Basic Ingredients</h2>
        <p>Every good bread start with four simple ingredients. Make we understand each one:</p>
        
        <h3>1. Flour - The Foundation</h3>
        <p>Flour na the main ingredient wey give bread structure. For Nigeria, you fit use:</p>
        <ul>
          <li><strong>All-purpose flour</strong> - Good for beginners</li>
          <li><strong>Bread flour</strong> - If you fit find am, e better for bread</li>
          <li><strong>Local wheat flour</strong> - Support local, but check the quality</li>
        </ul>

        <h3>2. Water - The Life</h3>
        <p>Water dey activate the yeast and bring everything together. Use clean, room temperature water for best results.</p>

        <h3>3. Yeast - The Magic</h3>
        <p>Yeast na living organism wey make bread rise. Two main types:</p>
        <ul>
          <li><strong>Active dry yeast</strong> - Need to dissolve in warm water first</li>
          <li><strong>Instant yeast</strong> - Mix directly with flour</li>
        </ul>

        <h3>4. Salt - The Controller</h3>
        <p>Salt no just add flavor, e dey control yeast activity and strengthen gluten.</p>

        <div class="tip-box">
          <h4>💡 Nigerian Baker Tip</h4>
          <p>For hot weather like ours, use cooler water to prevent yeast from working too fast!</p>
        </div>
      `,
    },
  }

  const currentLesson = lessonData[lessonId as keyof typeof lessonData]

  if (!currentLesson) {
    return <div>Lesson not found</div>
  }

  const markAsComplete = () => {
    setLessonCompleted(true)
    // In real app, this would sync to backend when online
    console.log(`Lesson ${lessonId} marked as complete`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/courses/baking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant={isOnline ? "default" : "secondary"}>{isOnline ? "Online" : "Offline"}</Badge>
              {!isOnline && (
                <div className="flex items-center gap-1 text-orange-600 text-sm">
                  <WifiOff className="h-4 w-4" />
                  <span>Cached Content</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Lesson Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{currentLesson.title}</h1>
            <p className="text-muted-foreground mb-4">{currentLesson.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{currentLesson.duration}</span>
              </div>
              {lessonCompleted && (
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Completed</span>
                </div>
              )}
            </div>
          </div>

          {/* Video Player */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                {isOnline ? (
                  <iframe
                    src={currentLesson.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title={currentLesson.title}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-white">
                    <div className="text-center">
                      <WifiOff className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Video requires internet connection</p>
                      <p className="text-sm opacity-75">Read the lesson content below</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Lesson Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Lesson Notes
              </CardTitle>
              <CardDescription>Read through these notes as you watch the video</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} className="space-y-4" />
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/courses/baking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Link>
            </Button>

            <div className="flex items-center gap-4">
              {!lessonCompleted && (
                <Button onClick={markAsComplete}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark as Complete
                </Button>
              )}

              <Button asChild>
                <Link href="/courses/baking/quiz">
                  Take Quiz
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tip-box {
          background: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 8px;
          padding: 16px;
          margin: 16px 0;
        }
        .tip-box h4 {
          margin: 0 0 8px 0;
          color: #0ea5e9;
        }
        .tip-box p {
          margin: 0;
          font-size: 14px;
        }
      `}</style>
    </div>
  )
}

export default function LessonPage() {
  return (
    <AuthGuard>
      <LessonContent />
    </AuthGuard>
  )
}
