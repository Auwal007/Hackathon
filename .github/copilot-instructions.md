# SkillHub Nigeria - AI Coding Agent Instructions

## Project Overview
SkillHub Nigeria is a **Progressive Web App (PWA)** providing offline-first vocational skills training for Nigerian youth. Built with Next.js 15, it focuses on baking, tailoring, and welding courses with Nigerian context and cultural relevance.

## Architecture & Tech Stack

### Core Technologies
- **Framework**: Next.js 15 with App Router (not Pages Router)
- **Styling**: Tailwind CSS v4+ with shadcn/ui components (New York variant)
- **Authentication**: Firebase Auth with offline-first localStorage mirroring
- **AI Integration**: OpenRouter API (DeepSeek Chat) with Nigerian-contextual system prompts
- **Deployment**: Netlify with PWA optimization
- **Package Manager**: pnpm (evidenced by `pnpm-lock.yaml`)

### Key Architectural Patterns

#### Offline-First Authentication
The auth system uses a **hybrid Firebase + localStorage pattern**:
```tsx
// Critical pattern: Always mirror Firebase auth state to localStorage
const mirrored = {
  id: fbUser.uid,
  name: fbUser.displayName || "",
  email: fbUser.email || "",
}
localStorage.setItem("skillhub_user", JSON.stringify(mirrored))
```
- Components check `navigator.onLine` before Firebase operations
- Offline users are authenticated via localStorage fallback
- Email verification is only enforced when online

#### Component Architecture
- Use `"use client"` for interactive components (auth, chat, forms)
- Server components for static content and layouts
- Components follow shadcn/ui patterns with `cn()` utility for conditional styling
- All components in `components/` use absolute imports via `@/` alias

#### UI Component Patterns
- **shadcn/ui components** in `components/ui/` - never modify these directly
- **Custom components** extend shadcn with consistent patterns:
  ```tsx
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  
  export function CustomComponent({ className, ...props }) {
    return (
      <Button className={cn("specific-styles", className)} {...props}>
        {children}
      </Button>
    )
  }
  ```

## Development Workflows

### File Structure Conventions
- **App Router**: Use `app/` directory structure, not `pages/`
- **Route Files**: `page.tsx`, `layout.tsx`, `route.ts` for API endpoints
- **Dynamic Routes**: `[param]/page.tsx` pattern (see `courses/baking/lessons/[lessonId]/page.tsx`)
- **Components**: Organized by type (`auth-*`, `site-*`, `ui/*`)

### Styling Patterns
- Use Tailwind utility classes extensively
- **Responsive Design**: Mobile-first with explicit `md:` breakpoints
- **Colors**: Emerald (`emerald-600`) for primary brand color
- **Layout**: Use `container mx-auto px-4` for consistent page margins
- **Cards**: shadcn Card components for content organization

### API Development
- **Route Handlers**: Use Next.js App Router API pattern in `app/api/`
- **OpenRouter Integration**: Structured for Nigerian context:
  ```typescript
  const SYSTEM_PROMPT = `You are SkillHub Nigeria AI Coach...
  Nigerian context and NGN formatting (e.g., ₦3,500)...`
  ```
- **Error Handling**: Always return JSON responses, never throw unhandled errors

### Authentication Flow
1. **Protected Routes**: Wrap with `<AuthGuard>` component
2. **User State**: Access via `useAuth()` hook
3. **Redirects**: Use `<AuthRedirectHandler>` for OAuth flows
4. **Verification**: Route unverified users to `/auth/verify-email` (online only)

## Nigerian Context Integration

### Content Localization
- **Currency**: Always use Nigerian Naira (₦) formatting
- **Examples**: Reference Nigerian businesses, locations, materials
- **Language**: English with Nigerian terminology
- **Cultural Relevance**: Agege bread, Ankara fabric, PHCN power mentions

### Course Structure
- **Baking**: Traditional Nigerian baking + modern techniques
- **Content Pattern**: Video lessons + detailed text content + quizzes
- **Offline Support**: Download lessons for offline learning

## Common Patterns & Conventions

### State Management
- Use React hooks (`useState`, `useEffect`) for component state
- Firebase auth state automatically synced to localStorage
- No external state management library (Redux, Zustand) used

### Error Handling
```typescript
// API routes: Always return structured responses
return NextResponse.json({
  choices: [{
    message: { role: "assistant", content: "fallback message" }
  }]
}, { status: 200 }) // Always 200, embed errors in response
```

### PWA Features
- Service worker registered in `layout.tsx`
- Manifest file in `public/manifest.json`
- Offline fallback page at `public/offline.html`

## Development Commands

```bash
# Development
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # Next.js linting

# Netlify deployment
npm run build      # Auto-deployed via netlify.toml
```

## Code Quality Guidelines

### TypeScript Usage
- Use TypeScript for all new files
- Props interfaces for components
- Type API responses appropriately

### Component Best Practices
- Prefer composition over inheritance
- Use forwardRef for components that need ref access
- Always handle loading and error states
- Make components responsive by default

### Performance Considerations
- Images use `unoptimized: true` in next.config.mjs (for Netlify)
- Lazy load heavy components
- Use React.Suspense for loading states

## Integration Points

### Firebase Configuration
- Environment variables prefixed with `NEXT_PUBLIC_FIREBASE_*`
- Initialize once with `getApps().length` check

### OpenRouter AI
- Environment variables: `OPENROUTER_API_KEY`, `OPENROUTER_SITE_URL`
- System prompt emphasizes Nigerian context and practical guidance
- Always provide fallback responses for API failures

### Deployment
- Netlify-specific configuration in `netlify.toml`
- Static export optimizations for JAMstack deployment
- PWA manifests and service workers included

When working on this codebase, prioritize offline functionality, Nigerian cultural context, and mobile-first responsive design. The app serves users with potentially limited internet connectivity, so robust offline features and efficient data usage are critical.