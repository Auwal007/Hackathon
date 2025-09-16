import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            This app is designed to work offline. We minimize the data we collect and store most information on your
            device.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Key points</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-muted-foreground">
            <ul>
              <li>
                Local storage: We store a minimal user record (e.g., name/email) in <code>localStorage</code> under
                <code>skillhub_user</code> when you log in on this device.
              </li>
              <li>
                Downloads: We keep a list of downloaded lessons in <code>localStorage</code> under
                <code>skillhub_downloaded_lessons</code> for offline access.
              </li>
              <li>
                Service worker: Lessons and assets may be cached by a service worker to enable offline use. You can
                clear this in your browser settings.
              </li>
              <li>
                No server account is required for the core features in this hackathon build. There is no central user
                database.
              </li>
              <li>
                Analytics: None by default in this build.
              </li>
            </ul>
            <p>
              If you have questions about privacy, please contact us at <a href="mailto:hello@skillhub.ng">hello@skillhub.ng</a>.
            </p>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}
