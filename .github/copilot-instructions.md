# AI Coding Agents: Working in this Repo

This doc gives you the minimum you need to ship changes quickly and correctly in this codebase. Keep it short, concrete, and specific to this project.

## Architecture (Next.js App Router, PWA, Firebase)
- Next.js 15 (App Router) with TypeScript. Global layout in `app/layout.tsx`; routes under `app/**`. UI is client-heavy but some routes use RSC by default.
- Styling: Tailwind CSS + shadcn/ui (see `components/ui/*`) and `cn()` helper in `lib/utils.ts`.
- Auth: Firebase client auth with an offline mirror. Online → Firebase (`onAuthStateChanged`); offline → read `localStorage.skillhub_user`. See `components/auth-guard.tsx` and `app/firebase/config.js`.
- AI: Chat endpoint `app/api/chat/route.ts` calls OpenRouter (`deepseek/deepseek-chat-v3.1:free`) with a strong Nigerian-context system prompt. Client widget is `components/chat-widget.tsx`.
- PWA/offline: Service worker registered by `app/register-sw.js` (only in production). Worker at `public/sw.js` uses network-first with cache fallback; additional offline UI logic in courses.

## Local dev, build, deploy
- Scripts (package.json): `dev` → Next dev, `build` → Next build, `start` → Next start, `lint` → Next lint.
- TypeScript/ESLint errors won’t block builds (see `next.config.mjs`). Don’t rely on this to merge broken code; keep types green locally.
- Netlify deploy uses `npm run build` with Node 20 (`netlify.toml`). Images are unoptimized; static regeneration etags disabled.
- Env vars needed for features:
  - Firebase (client): `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, `NEXT_PUBLIC_FIREBASE_APP_ID`.
  - Chat API: `OPENROUTER_API_KEY` (server). Optionally `OPENROUTER_SITE_URL`, `OPENROUTER_SITE_NAME`.

## Conventions and patterns
- Auth-protected pages wrap content with `AuthGuard`. Example:
  - `app/courses/page.tsx`, `app/courses/baking/page.tsx`, lessons/quiz pages. Use `useAuth()` for user and `logout()`.
- Offline-aware UX pattern:
  - Track `navigator.onLine`; persist lesson downloads in `localStorage.skillhub_downloaded_lessons`.
  - Gate lesson access with `isOnline || downloadedLessons.includes(lessonId)`.
  - Show badges/alerts for Online/Offline; favor simple localStorage over complex caching.
- UI components: Prefer shadcn/ui primitives in `components/ui/*` (Button, Card, Badge, Progress, Input, etc.), and icons from `lucide-react`. Keep sizes consistent (`h-4 w-4`, `h-5 w-5`).
- Layout: `HeaderSwitcher` and `ChatWidget` are injected globally in `app/layout.tsx`. Pages should focus on main content only.
- Styling: Tailwind with design tokens via CSS vars (see `tailwind.config.js`). Use `cn()` for conditional classes and respect established color roles (primary/secondary/accent, etc.).
- Routing: Course structure uses nested routes like `/courses/[skill]/lessons/[lessonId]` and `/courses/[skill]/quiz`. Keep this shape when adding new skills.
- Content voice: Nigerian context. Prices in NGN (₦), examples/local terms (Ankara, Agege, PHCN). The chat system prompt codifies tone—mirror it in content.

## Integration points
- Chat API contract (`/api/chat`):
  - Request: `{ messages: Array<{ role: 'user'|'assistant'|'system', content: string }> }`
  - Response: OpenAI-style: `{ choices: [{ message: { content: string } }] }` (non-streaming).
  - Failure path is normalized to 200 with an error message when `OPENROUTER_API_KEY` is missing or upstream fails. Handle defensively on client.
- Firebase: Only client SDK is initialized. No server-side admin SDK. Don’t add server-only Firebase without confirming hosting/runtime constraints.
- Service worker: Add new cache URLs in `public/sw.js` `urlsToCache`. Skip Next dev assets via `shouldBypass()`.

## Examples from the codebase
- Protect a page:
  - Wrap default export with `<AuthGuard>…</AuthGuard>` and read auth via `useAuth()`.
- Add an offline-capable lesson:
  - Persist downloaded lesson IDs to `localStorage.skillhub_downloaded_lessons`.
  - Render Start button disabled when offline and not downloaded; enable when downloaded.
- Use the chat API from a component:
  - POST to `/api/chat` with the existing message history; render `data.choices[0].message.content`.

## Pitfalls to avoid
- Don’t assume server streaming; chat is non-streaming by design.
- Don’t break global layout by removing `AuthRedirectHandler`, `HeaderSwitcher`, or `ChatWidget` from `app/layout.tsx`.
- Don’t introduce server-only Node APIs into client components.
- Keep TypeScript strict-friendly even though builds ignore errors.

## Where to look
- Pages & routes: `app/**`
- UI primitives: `components/ui/*`
- Auth & redirects: `components/auth-guard.tsx`, `components/auth-redirect-handler.tsx`
- AI chat: `app/api/chat/route.ts`, `components/chat-widget.tsx`
- PWA: `app/register-sw.js`, `public/sw.js`, `public/offline.html`, `public/manifest.json`
- Config: `next.config.mjs`, `tailwind.config.js`, `netlify.toml`, `tsconfig.json`

If anything here is unclear or missing (e.g., additional skills, data models, or backend plans), tell us what you need and propose the minimal change to keep consistency with these patterns.