const CACHE_NAME = "skillhub-v2"
const urlsToCache = [
  "/",
  "/courses",
  "/courses/baking",
  "/offline.html",
  "/skill-hub-logo-removebg-preview.png",
  "/skill-hub-logo.png",
  "/videos/demo-lesson.mp4" // Cache the demo video
]

// Helper: determine if a request should bypass the SW (Next.js dev assets)
function shouldBypass(request) {
  const url = new URL(request.url)
  // Bypass Next.js dev and build assets, HMR, stack frames, and devtools probes
  if (
    url.pathname.startsWith("/_next/") ||
    url.pathname.startsWith("/__nextjs_original-stack-frame") ||
    url.pathname.startsWith("/__nextjs_launch-editor") ||
    url.pathname.startsWith("/__nextjs_testing__/") ||
    url.pathname.startsWith("/.well-known/appspecific/")
  ) {
    return true
  }
  return false
}

// Install event - cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Fetch event - serve from cache when offline
self.addEventListener("fetch", (event) => {
  const { request } = event

  // Always let Next.js handle its own assets/HMR and dev endpoints
  if (shouldBypass(request)) {
    return
  }

  // Use a network-first strategy with cache fallback for navigations and same-origin GET requests
  if (request.method === "GET" && new URL(request.url).origin === self.location.origin) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // Cache a copy of successful responses
          const responseClone = networkResponse.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone)).catch(() => {})
          return networkResponse
        })
        .catch(async () => {
          // Fallback to cache when offline
          const cached = await caches.match(request)
          if (cached) return cached
          // If it's a navigation request, serve offline page
          if (request.mode === "navigate") {
            const offline = await caches.match("/offline.html")
            if (offline) return offline
          }
          // Otherwise, just rethrow to let the browser handle it
          throw new Error("Network error and no cache available")
        }),
    )
  }
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
