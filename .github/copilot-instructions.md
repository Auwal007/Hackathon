# SkillHub Nigeria – AI Guide

## Project Snapshot
- Next.js 15 App Router + TypeScript PWA focused on offline-first vocational learning; frontend lives under `app/`.
- UI primitives live in `components/ui/*` (shadcn) and helpers in `lib/utils.ts` (`cn`), keeping styles in Tailwind classes defined by `app/globals.css`.
- Static marketing/public pages sit in `app/{about,contact,terms,privacy}`, while authenticated dashboards live under `app/courses`, `app/settings`, etc.

## Local Dev & Env
- Install deps with `npm install` (pnpm lock is checked in but npm scripts are canonical); run `npm run dev`, `npm run lint`, `npm run build`.
- Node 20 is expected (Netlify config); set Firebase envs `NEXT_PUBLIC_FIREBASE_*` plus `OPENROUTER_API_KEY`, optional `OPENROUTER_SITE_URL`/`OPENROUTER_SITE_NAME` for the chat API.
- `.env.local` must mirror `.env.example`; without keys AuthGuard falls back to localStorage-only which is fine for storybook-style mocks.

## Routing & Layout
- `app/layout.tsx` wraps every page with `AuthRedirectHandler`, `HeaderSwitcher`, and `ChatWidget`; keep new global providers here.
- `HeaderSwitcher` only renders `SiteHeader` on public routes, so private pages must explicitly render `InnerPageHeader` inside their own layout.
- Authenticated screens should use `<AuthGuard><InnerPageHeader />…</AuthGuard>` (see `app/courses/page.tsx`, `app/settings/page.tsx`).

## Authentication & Offline Mirror
- `AuthGuard` uses Firebase Auth when online and mirrors the minimal user to `localStorage` (`skillhub_user`) for offline fallback; update both when mutating auth state.
- OAuth redirects are resolved by `components/auth-redirect-handler.tsx`; if you add providers, ensure their redirect flow still stores the same user shape.
- Email verification is enforced: unverified users are pushed to `/auth/verify-email`; keep that in sync when adding gated areas.

## Course Content & Progress
- Course lists and lessons are hard-coded arrays/objects inside their route files (`app/courses/baking/**`); extend them in place or extract to shared data modules.
- Lesson pages render HTML strings through `dangerouslySetInnerHTML` plus scoped `<style jsx>` for `.tip-box`; keep HTML sanitized and update CSS there.
- Offline access relies on `skillhub_downloaded_lessons` and `navigator.onLine`; reuse `canAccessLesson`/`downloadLesson` patterns when introducing new lessons.
- Quiz progress persists in `localStorage` (`skillhub_baking_quiz_result`); follow the same schema if you add quizzes to other courses.

## UI & Styling
- Tailwind v4 via `@import "tailwindcss"` and CSS custom properties in `app/globals.css`; extend palettes by editing the CSS variables, not the components.
- Use shadcn components (`components/ui/*`) and the `cn` helper for conditional classes instead of ad-hoc HTML.
- `InnerPageHeader` + `UserMenu` handles desktop nav; mobile drawers live in `components/inner-page-mobile-nav.tsx`/`mobile-nav.tsx` if you need responsive tweaks.

## AI Chat & API
- `components/chat-widget.tsx` posts to `/api/chat` which calls OpenRouter’s `deepseek/deepseek-chat-v3.1:free`; the system prompt enforces ≤180-word Nigerian-context replies—read `app/api/chat/route.ts` before changing tone or format.
- Handle network failures gracefully: the widget already watches `navigator.onLine` and shows cached messages; keep new features tolerant of offline state.

## PWA & Offline
- `app/register-sw.js` registers `public/sw.js` only in production to avoid dev-mode conflicts; import it at the page level if you add new standalone shells.
- `public/sw.js` caches a short allowlist (`urlsToCache`) and uses network-first for same-origin GETs; update the allowlist when adding critical offline routes and keep `offline.html` friendly.
- Manifest lives in `public/manifest.json`; add icons or categories there when changing branding.

## Build & Deploy
- Netlify builds run `npm run build` with `@netlify/plugin-nextjs`; ensure SSR-safe APIs stay under `/app/api`.
- `next.config.mjs` ignores TypeScript/Lint errors during build, so run `npm run lint` locally before opening PRs.
- Images are `unoptimized: true`, so provide appropriately sized assets under `public/images/` to avoid huge payloads.
