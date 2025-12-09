"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, Loader2, Camera, Image as ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string | Array<{ type: string; text?: string; image_url?: { url: string } }>
}

// Simple markdown-like formatter for chat messages
const formatMessage = (content: string | Array<any>): string => {
  if (Array.isArray(content)) {
    return content.map(c => c.text || "").join(" ")
  }
  return content
    // Bold text **text** -> <strong>text</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Bullet points * item -> • item
    .replace(/^\s*\*\s+(.+)$/gm, '• $1')
    // Line breaks
    .replace(/\n/g, '<br />')
    // Code blocks `code` -> <code>code</code>
    .replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-1 rounded text-xs">$1</code>')
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I'm your SkillHub AI assistant. I can help you choose the right vocational skill, explain difficult concepts, or answer questions about our courses. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const endRef = useRef<HTMLDivElement | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Listen for external triggers (e.g., "Monetize This Skill" button)
  useEffect(() => {
    const handleTrigger = (e: CustomEvent) => {
      if (e.detail?.action === "open-chat") {
        setIsOpen(true)
        if (e.detail?.message) {
          handleExternalMessage(e.detail.message)
        }
      }
    }
    window.addEventListener("trigger-chat" as any, handleTrigger as any)
    return () => window.removeEventListener("trigger-chat" as any, handleTrigger as any)
  }, [])

  const handleExternalMessage = async (text: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)
    setError(null)
    
    try {
      await processChatRequest([...messages, userMessage])
    } catch (err) {
      // Error handling
    }
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const processChatRequest = async (msgs: Message[]) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: msgs.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const data = await response.json()
      const assistantContent = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response."

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: assistantContent,
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if ((!input.trim() && !selectedImage) || isLoading) return

    let content: any = input.trim()
    
    if (selectedImage) {
      content = [
        { type: "text", text: input.trim() || "Analyze this image." },
        { type: "image_url", image_url: { url: selectedImage } }
      ]
    }

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: content,
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setSelectedImage(null)
    setIsLoading(true)
    setError(null)

    await processChatRequest([...messages, userMessage])
  }

  // Auto-scroll to the latest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  // Track online/offline status
  useEffect(() => {
    function onOnline() {
      setIsOnline(true)
    }
    function onOffline() {
      setIsOnline(false)
    }
    window.addEventListener("online", onOnline)
    window.addEventListener("offline", onOffline)
    return () => {
      window.removeEventListener("online", onOnline)
      window.removeEventListener("offline", onOffline)
    }
  }, [])

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-0 transition-all duration-300",
          // Remove any default background/rounded from Button
          "bg-transparent hover:bg-transparent rounded-none shadow-none h-auto w-auto",
          // Add hover animations and shadow
          "hover:scale-110 transform hover:drop-shadow-2xl",
          "drop-shadow-lg",
          isOpen && "opacity-90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-12 w-12 md:h-14 md:w-14 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] transition-transform duration-200" />
        ) : (
          <img
            src="/chatbot-icon-removebg-preview.png"
            alt="AI Chat"
            className="h-28 w-28 md:h-32 md:w-32 object-contain transition-all duration-500 hover:scale-110 animate-pulse"
            style={{
              animation: 'float 3s ease-in-out infinite, pulse 2s ease-in-out infinite',
            }}
          />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card
          className={cn(
            "fixed bottom-24 right-6 z-40 w-80 h-96 shadow-2xl transition-all duration-300",
            "flex flex-col bg-white border-emerald-200",
            "md:w-96 md:h-[500px]",
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-emerald-50">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-semibold text-emerald-900">SkillHub AI</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-emerald-100"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {!isOnline && (
              <div className="flex justify-center">
                <div className="bg-amber-50 text-amber-900 border border-amber-200 rounded-md px-3 py-2 text-xs">
                  You are offline. You can still read previous messages, but sending may fail.
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-center">
                <div className="bg-red-50 text-red-900 border border-red-200 rounded-md px-3 py-2 text-xs">
                  Error: {error}
                </div>
              </div>
            )}
            {messages.map((message) => (
              <div key={message.id} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                    message.role === "user" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-900",
                  )}
                >
                  {Array.isArray(message.content) && message.content.some(c => c.type === 'image_url') && (
                    <div className="mb-2">
                      <img 
                        src={message.content.find(c => c.type === 'image_url')?.image_url?.url} 
                        alt="Uploaded" 
                        className="max-w-full rounded-md max-h-40 object-cover"
                      />
                    </div>
                  )}
                  <div 
                    className={cn(
                      "leading-relaxed",
                      message.role === "user" ? "text-white" : "text-gray-900"
                    )}
                    dangerouslySetInnerHTML={{ 
                      __html: formatMessage(message.content) 
                    }}
                  />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Image Preview */}
          {selectedImage && (
            <div className="px-4 py-2 border-t bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 relative rounded overflow-hidden border">
                  <img src={selectedImage} alt="Preview" className="object-cover w-full h-full" />
                </div>
                <span className="text-xs text-gray-500">Image selected</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedImage(null)} className="h-6 w-6 p-0">
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageSelect}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0"
                onClick={() => fileInputRef.current?.click()}
                title="Upload photo for analysis"
              >
                <Camera className="h-4 w-4 text-gray-500" />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask or upload work..."
                className="flex-1 border-emerald-200 focus:border-emerald-500"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || (!input.trim() && !selectedImage)}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
