"use client"

import { useEffect } from "react"

export function RegisterSW() {
  useEffect(() => {
    // Only register the Service Worker in production to avoid
    // interfering with Next.js dev server and HMR assets.
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      const onLoad = () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered:", registration)
          })
          .catch((registrationError) => {
            console.log("SW registration failed:", registrationError)
          })
      }

      // Register after window load to ensure all dev tools are ready
      window.addEventListener("load", onLoad)
      return () => window.removeEventListener("load", onLoad)
    }
  }, [])

  return null
}
