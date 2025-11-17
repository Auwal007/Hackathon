import { NextResponse } from "next/server"

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
const MODEL = "moonshotai/kimi-k2:free"

// System prompt to steer the assistant across primary functions with Nigerian context
const SYSTEM_PROMPT = `
You are SkillHub Nigeria AI Coach — a friendly, practical assistant for vocational training in Nigeria.

Primary functions:
1) Skill Recommendation Engine
  - Match users to courses (baking, tailoring, welding) based on interests, state/city, budget, time availability, device/data limits.
  - Reflect Nigerian market demand (e.g., party season baking, school uniforms, security doors/gates). Ask 1 clarifying question if needed.

2) Course Tutor
  - Explain concepts simply with short, local examples (e.g., Agege bread, Ankara fabric, inverter welding in PHCN outages).
  - Provide step-by-step guidance and safety notes. Use metric units.

3) Learning Assistant
  - Answer questions about lessons, suggest practice tasks and mini-projects, and remind users to download lessons for offline learning.
  - Encourage progress tracking and quiz practice.

4) Career Guidance
  - Suggest income opportunities, pricing in NGN (₦), and local market tips by region.
  - Offer basic costing templates and starter kits within low/medium/high budgets.

Style & constraints:
- Be concise (<= 180 words), structured with short paragraphs or bullet points.
- Use Nigerian context and NGN formatting (e.g., ₦3,500), avoid unrealistic claims.
- If details are missing, ask exactly one clarifying question before giving recommendations.
- Never reveal chain-of-thought; provide only helpful conclusions and steps.
- If offline is mentioned, highlight SkillHub’s offline-first features (download lessons, learn without data).
`

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const incoming = Array.isArray(body?.messages) ? body.messages : []

    // Filter and map messages to OpenRouter/OpenAI format
    const messages = incoming
      .filter((m: any) => typeof m?.role === "string" && typeof m?.content !== "undefined")
      .map((m: any) => ({ role: m.role, content: String(m.content) }))

    // Prepend system prompt
    const messagesWithSystem = [{ role: "system", content: SYSTEM_PROMPT }, ...messages]

    const apiKey = process.env.OPENROUTER_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          id: crypto.randomUUID(),
          object: "chat.completion",
          created: Math.floor(Date.now() / 1000),
          model: MODEL,
          choices: [
            {
              index: 0,
              message: {
                role: "assistant",
                content: "Server is missing the OpenRouter API key. Please set OPENROUTER_API_KEY in your environment."
              },
              finish_reason: "stop"
            }
          ],
          usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }
        },
        { status: 200 }
      )
    }

    const referer = process.env.OPENROUTER_SITE_URL || "http://localhost:3000"
    const title = process.env.OPENROUTER_SITE_NAME || "SkillHub Nigeria"

    const resp = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": referer,
        "X-Title": title,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messagesWithSystem,
        temperature: 0.7,
        max_tokens: 500,
        top_p: 0.9,
        stream: false, // Disable streaming
      }),
    })

    if (!resp.ok) {
      const errTxt = await resp.text().catch(() => "Unknown error")
      if (process.env.NODE_ENV !== "production") {
        console.error("[OpenRouter] HTTP", resp.status, errTxt)
      }
      
      return NextResponse.json(
        {
          id: crypto.randomUUID(),
          object: "chat.completion",
          created: Math.floor(Date.now() / 1000),
          model: MODEL,
          choices: [
            {
              index: 0,
              message: {
                role: "assistant",
                content: "I couldn't reach the model right now. Please try again in a moment."
              },
              finish_reason: "stop"
            }
          ],
          usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
          error: { status: resp.status, message: errTxt.substring(0, 200) }
        },
        { status: 200 }
      )
    }

    // Parse the JSON response from OpenRouter
    const data = await resp.json().catch(() => null)
    
    if (!data) {
      return NextResponse.json(
        {
          id: crypto.randomUUID(),
          object: "chat.completion",
          created: Math.floor(Date.now() / 1000),
          model: MODEL,
          choices: [
            {
              index: 0,
              message: {
                role: "assistant",
                content: "Received an invalid response from the model. Please try again."
              },
              finish_reason: "stop"
            }
          ],
          usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }
        },
        { status: 200 }
      )
    }

    // Log the response for debugging in development
    if (process.env.NODE_ENV !== "production") {
      console.log("[OpenRouter] Response received:", data.choices?.[0]?.message?.content?.substring(0, 100) + "...")
    }

    // Return the OpenRouter response directly as JSON
    return NextResponse.json(data)
    
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[API] Error:", e)
    }
    
    return NextResponse.json(
      {
        id: crypto.randomUUID(),
        object: "chat.completion",
        created: Math.floor(Date.now() / 1000),
        model: MODEL,
        choices: [
          {
            index: 0,
            message: {
              role: "assistant",
              content: "Sorry, something went wrong while processing your message."
            },
            finish_reason: "stop"
          }
        ],
        usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }
      },
      { status: 200 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, model: MODEL })
}
