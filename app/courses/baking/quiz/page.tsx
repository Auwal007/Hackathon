"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AuthGuard } from "@/components/auth-guard"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, ArrowRight, CheckCircle, X, Trophy, Star, Clock, Target } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  points: number
}

function QuizContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [quizStarted, setQuizStarted] = useState(false)

  const questions: Question[] = [
    {
      id: "q1",
      question: "What are the four basic ingredients needed to make bread?",
      options: [
        "Flour, water, yeast, sugar",
        "Flour, water, yeast, salt",
        "Flour, milk, yeast, salt",
        "Flour, water, baking powder, salt",
      ],
      correctAnswer: 1,
      explanation:
        "The four basic ingredients for bread are flour, water, yeast, and salt. Sugar is optional but not essential.",
      points: 10,
    },
    {
      id: "q2",
      question: "Why is it important to measure ingredients accurately in baking?",
      options: [
        "To save money on ingredients",
        "Because baking is a science that requires precision",
        "To make the recipe faster",
        "It's not really important",
      ],
      correctAnswer: 1,
      explanation:
        "Baking is a science that requires precise measurements. Too much or too little of any ingredient can affect the final result.",
      points: 10,
    },
    {
      id: "q3",
      question: "What happens if you use water that is too hot when activating yeast?",
      options: [
        "The yeast will work faster",
        "Nothing will happen",
        "The yeast will die",
        "The bread will taste better",
      ],
      correctAnswer: 2,
      explanation: "Water that is too hot (above 110°F/43°C) will kill the yeast, preventing the bread from rising.",
      points: 15,
    },
    {
      id: "q4",
      question: "What is the main purpose of salt in bread making?",
      options: [
        "Only for flavor",
        "To make the bread brown",
        "To control yeast activity and strengthen gluten",
        "To make the bread rise faster",
      ],
      correctAnswer: 2,
      explanation: "Salt controls yeast activity, strengthens gluten structure, and adds flavor to the bread.",
      points: 15,
    },
    {
      id: "q5",
      question: "In hot weather like Nigeria, what should you do with the water temperature?",
      options: [
        "Use very hot water",
        "Use cooler water than normal",
        "Use boiling water",
        "Temperature doesn't matter",
      ],
      correctAnswer: 1,
      explanation:
        "In hot climates, use cooler water to prevent the yeast from working too quickly and to maintain proper fermentation.",
      points: 20,
    },
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (quizStarted && timeLeft > 0 && !showResults) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
    } else if (timeLeft === 0 && !showResults) {
      handleSubmitQuiz()
    }
    return () => clearTimeout(timer)
  }, [timeLeft, quizStarted, showResults])

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
    setTimeLeft(300)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitQuiz = () => {
    let totalScore = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        totalScore += questions[index].points
      }
    })
    setScore(totalScore)
    setShowResults(true)

    // Save quiz result (in real app, sync to backend when online)
    const quizResult = {
      score: totalScore,
      totalPossible: questions.reduce((sum, q) => sum + q.points, 0),
      completedAt: new Date().toISOString(),
      answers: selectedAnswers,
    }
    localStorage.setItem("skillhub_baking_quiz_result", JSON.stringify(quizResult))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.reduce((sum, q) => sum + q.points, 0)) * 100
    if (percentage >= 90)
      return { message: "Excellent! You dey understand well well!", color: "text-green-600", icon: Trophy }
    if (percentage >= 70) return { message: "Good job! You dey learn fast!", color: "text-blue-600", icon: Star }
    if (percentage >= 50)
      return { message: "Not bad! Practice more, you go improve!", color: "text-yellow-600", icon: Target }
    return { message: "No worry, try again! Practice makes perfect!", color: "text-orange-600", icon: Target }
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/courses/baking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Link>
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="p-4 bg-primary/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Baking Basics Quiz</h1>
              <p className="text-muted-foreground mb-6">
                Test your knowledge of the baking fundamentals you just learned!
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{questions.length}</div>
                    <div className="text-sm text-muted-foreground">Questions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5</div>
                    <div className="text-sm text-muted-foreground">Minutes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {questions.reduce((sum, q) => sum + q.points, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Points</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert className="mb-8">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                You have 5 minutes to complete this quiz. You can navigate between questions, but make sure to submit
                before time runs out!
              </AlertDescription>
            </Alert>

            <Button size="lg" onClick={startQuiz} className="px-8">
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    const scoreMessage = getScoreMessage()
    const ScoreIcon = scoreMessage.icon
    const totalPossible = questions.reduce((sum, q) => sum + q.points, 0)
    const percentage = Math.round((score / totalPossible) * 100)

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/courses/baking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Link>
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div
                className={`p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center ${scoreMessage.color.replace("text-", "bg-").replace("-600", "-100")}`}
              >
                <ScoreIcon className={`h-10 w-10 ${scoreMessage.color}`} />
              </div>
              <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
              <p className={`text-xl ${scoreMessage.color} font-semibold mb-4`}>{scoreMessage.message}</p>
              <div className="text-4xl font-bold mb-2">
                {score}/{totalPossible} points ({percentage}%)
              </div>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {questions.map((question, index) => {
                    const userAnswer = selectedAnswers[index]
                    const isCorrect = userAnswer === question.correctAnswer

                    return (
                      <div key={question.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`p-1 rounded-full ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
                            {isCorrect ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <X className="h-4 w-4 text-red-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">
                              Question {index + 1}: {question.question}
                            </h3>
                            <div className="space-y-2 mb-3">
                              {question.options.map((option, optionIndex) => (
                                <div
                                  key={optionIndex}
                                  className={cn(
                                    "p-2 rounded text-sm",
                                    optionIndex === question.correctAnswer && "bg-green-100 text-green-800",
                                    optionIndex === userAnswer &&
                                      optionIndex !== question.correctAnswer &&
                                      "bg-red-100 text-red-800",
                                    optionIndex !== question.correctAnswer &&
                                      optionIndex !== userAnswer &&
                                      "bg-gray-50",
                                  )}
                                >
                                  {option}
                                  {optionIndex === question.correctAnswer && " ✓"}
                                  {optionIndex === userAnswer && optionIndex !== question.correctAnswer && " ✗"}
                                </div>
                              ))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <strong>Explanation:</strong> {question.explanation}
                            </div>
                            <div className="text-sm font-semibold mt-2">
                              Points: {isCorrect ? question.points : 0}/{question.points}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={startQuiz}>
                Retake Quiz
              </Button>
              <Button asChild>
                <Link href="/courses/baking">Continue Learning</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/courses/baking">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Exit Quiz
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className={`font-mono ${timeLeft < 60 ? "text-red-600" : ""}`}>{formatTime(timeLeft)}</span>
              </div>
              <Badge variant="secondary">
                {currentQuestion + 1} of {questions.length}
              </Badge>
            </div>
          </div>
          <div className="mt-2">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Question {currentQuestion + 1}</CardTitle>
              <CardDescription>{currentQ.points} points</CardDescription>
            </CardHeader>
            <CardContent>
              <h2 className="text-lg font-semibold mb-6">{currentQ.question}</h2>

              <div className="space-y-3 mb-8">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={cn(
                      "w-full p-4 text-left rounded-lg border transition-all",
                      selectedAnswers[currentQuestion] === index
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50 hover:bg-muted/50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                          selectedAnswers[currentQuestion] === index
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground",
                        )}
                      >
                        {selectedAnswers[currentQuestion] === index && <CheckCircle className="h-4 w-4" />}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                {currentQuestion === questions.length - 1 ? (
                  <Button onClick={handleSubmitQuiz} disabled={selectedAnswers[currentQuestion] === undefined}>
                    Submit Quiz
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion} disabled={selectedAnswers[currentQuestion] === undefined}>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function QuizPage() {
  return (
    <AuthGuard>
      <QuizContent />
    </AuthGuard>
  )
}
