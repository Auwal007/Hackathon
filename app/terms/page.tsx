import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Terms of Service",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground mt-2 max-w-3xl">
            These terms apply to the SkillHub Nigeria hackathon build.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-muted-foreground">
            <ul>
              <li>Use the content for personal learning and non‑commercial purposes during the hackathon.</li>
              <li>Do not upload illegal, harmful, or abusive content.</li>
              <li>All course materials and branding are provided as‑is with no warranties.</li>
              <li>We may change or remove features at any time as part of the prototype.</li>
              <li>By using the app, you accept these terms.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
