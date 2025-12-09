# Copilot Instructions for SkillHub Nigeria

## Project Overview
This is a Next.js 15+ (App Router) project for "SkillHub Nigeria", a vocational learning platform. It uses TypeScript, Tailwind CSS v4, and Firebase. The app is designed to be PWA-capable with offline support.

## Architecture & Tech Stack
- **Framework**: Next.js 15 (App Router).
- **Language**: TypeScript.
- **Styling**: Tailwind CSS v4 with `tailwindcss-animate`.
- **UI Library**: Radix UI primitives via Shadcn/UI-like components in `components/ui/`.
- **Icons**: `lucide-react`.
- **Backend/Auth**: Firebase (Client SDK). Config in `app/firebase/config.js`.
- **AI**: Vercel AI SDK (`ai`, `@ai-sdk/react`) for chat features.
- **PWA**: Service worker (`public/sw.js`, `app/register-sw.js`) and manifest (`public/manifest.json`).

## Conventions

### Component Structure
- **UI Components**: Reusable, atomic components live in `components/ui/`. Prefer using these over raw HTML/Tailwind.
- **Feature Components**: Business logic components live in `components/` (e.g., `auth-guard.tsx`, `chat-widget.tsx`).
- **Pages**: Route pages live in `app/` (e.g., `app/courses/page.tsx`).

### Styling
- Use Tailwind CSS utility classes.
- Use the `cn()` utility from `lib/utils.ts` for conditional class merging.
  ```tsx
  import { cn } from "@/lib/utils"
  // ...
  className={cn("base-class", condition && "conditional-class")}
  ```
- Fonts: `GeistSans` and `GeistMono` are configured in `app/layout.tsx`.

### Data Fetching & State
- **Firebase**: Use Firebase SDK for auth and data.
- **Client Components**: Mark components as `"use client"` when using hooks or interactivity.
- **Server Components**: Default to Server Components for data fetching where possible (though Firebase client SDK is heavily used here).

### Routing & Navigation
- Use `next/link` for internal navigation.
- `app/layout.tsx` handles global providers and layout (Header, Footer, AuthRedirect).

### AI & Chat
- Chat functionality is implemented using Vercel AI SDK.
- API route: `app/api/chat/route.ts`.
- UI Component: `components/chat-widget.tsx`.

## Critical Workflows
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Specific Patterns
- **Auth Guard**: Protected routes are managed via `components/auth-guard.tsx` or `components/auth-redirect-handler.tsx`.
- **Offline Support**: The app registers a service worker for offline capabilities. Be mindful of caching strategies in `public/sw.js`.
