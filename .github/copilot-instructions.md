# SkillHub Nigeria - AI Coding Assistant Instructions

## Project Overview
This is a Progressive Web App (PWA) for vocational skills training in Nigeria, built with Next.js 15, TypeScript, and shadcn/ui. The app features offline-first learning with course management, authentication, and mobile-responsive design.

## Architecture & Tech Stack

### Core Technologies
- **Next.js 15** with App Router (RSC enabled)
- **TypeScript** with strict mode
- **Tailwind CSS 4.x** with shadcn/ui components
- **Radix UI** primitives for accessibility
- **PWA** with service worker for offline functionality
- **LocalStorage** for client-side state persistence

### Key Dependencies
```json
{
  "ui": "@radix-ui/react-*", "shadcn/ui components",
  "styling": "tailwindcss", "class-variance-authority", "tailwind-merge",
  "icons": "lucide-react",
  "forms": "react-hook-form", "@hookform/resolvers", "zod",
  "fonts": "geist"
}
```

## File Structure Patterns

### App Router Structure
- `app/` - Next.js 15 App Router with nested routes
- `app/auth/` - Authentication pages (login/signup)
- `app/courses/` - Course listings and individual course pages
- `app/courses/[skill]/lessons/[lessonId]/` - Dynamic lesson routes

### Component Organization
- `components/ui/` - shadcn/ui base components (button, card, input, etc.)
- `components/` - Custom app components (auth-guard, mobile-nav, theme-provider)
- `lib/utils.ts` - Utility functions (cn function for className merging)

## Authentication Patterns

### Auth Implementation
- **Client-side only** authentication using localStorage
- `AuthGuard` component wraps protected routes
- `useAuth` hook provides user state and logout functionality
- Auth state stored as JSON in `localStorage.getItem("skillhub_user")`

```tsx
// Auth pattern used throughout app
<AuthGuard>
  <ProtectedContent />
</AuthGuard>
```

### Auth Navigation
- Unauthorized users redirected to `/auth/login`
- Auth forms likely use react-hook-form + zod validation
- No server-side authentication - purely client-side

## PWA & Offline Features

### Service Worker Setup
- `register-sw.js` component registers `/sw.js` on mount
- Offline-first design with downloadable course content
- Lesson downloads stored in localStorage as `skillhub_downloaded_lessons`
- Online/offline status detection with `navigator.onLine`

### Offline Patterns
```tsx
// Common offline pattern in course components
const [isOnline, setIsOnline] = useState(navigator.onLine)
const [downloadedLessons, setDownloadedLessons] = useState<string[]>([])

// Check if lesson can be accessed offline
const canAccessLesson = (lessonId: string) => {
  return isOnline || downloadedLessons.includes(lessonId)
}
```

## UI/UX Conventions

### Design System
- **Primary color**: Emerald/Green theme (`emerald-500`, `emerald-600`)
- **Mobile-first** responsive design with breakpoints
- **shadcn/ui** "new-york" style with neutral base color
- **Geist font family** (sans & mono variants)

### Component Patterns
- Consistent use of `Button`, `Card`, `Badge` from shadcn/ui
- Icons from `lucide-react` with consistent sizing (`h-4 w-4`, `h-5 w-5`)
- Color-coded status indicators (green=online, orange=offline, blue=info)
- Mobile navigation with hamburger menu (`MobileNav` component)

### Layout Patterns
```tsx
// Typical page structure
<div className="min-h-screen bg-background">
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
    {/* Navigation */}
  </header>
  <main className="container mx-auto px-4 py-8">
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">{/* Main content */}</div>
      <div>{/* Sidebar */}</div>
    </div>
  </main>
</div>
```

## Course Management

### Course Structure
- Courses are skill-based (baking, tailoring, welding)
- Lessons within courses have IDs, duration, type, completion status
- Progress tracking via localStorage
- Download functionality for offline access

### Routing Conventions
- `/courses` - Course listing
- `/courses/[skill]` - Individual course (e.g., `/courses/baking`)
- `/courses/[skill]/lessons/[lessonId]` - Individual lessons
- `/courses/[skill]/quiz` - Course quizzes

## Development Guidelines

### Build Configuration
- ESLint and TypeScript errors ignored in builds (`ignoreDuringBuilds: true`)
- Images unoptimized (`unoptimized: true`)
- PWA manifest at `/manifest.json`

### State Management
- **No global state library** - uses React state + localStorage
- Client-side persistence for user auth, course progress, downloads
- Online/offline status tracking in course components

### Styling Approach
- Tailwind utility classes with `cn()` helper for conditional styling
- Component variants using `class-variance-authority`
- Consistent spacing, typography, and color system
- Mobile-responsive with `sm:`, `lg:` breakpoints

## Nigerian Context
- Content focused on Nigerian learners and local economy
- References to Nigerian states, culture, and business environment
- Naira currency formatting where applicable
- Local imagery and culturally relevant examples

When working on this codebase:
1. Follow the established PWA offline-first patterns
2. Use shadcn/ui components consistently
3. Maintain the Nigerian cultural context in content
4. Ensure mobile responsiveness for all features
5. Use localStorage for client-side persistence
6. Follow the course → lesson → quiz routing structure