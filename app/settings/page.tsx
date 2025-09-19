"use client"

import { AuthGuard } from "@/components/auth-guard"
import { InnerPageHeader } from "@/components/inner-page-header"
import { SettingsForm } from "@/components/settings-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <InnerPageHeader />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-gray-600 mt-2">
                Manage your account settings and preferences
              </p>
            </div>

            <div className="grid gap-6">
              {/* Profile Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information and profile details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SettingsForm />
                </CardContent>
              </Card>

              {/* Learning Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Learning Preferences</CardTitle>
                  <CardDescription>
                    Customize your learning experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Preferred Learning Language
                      </label>
                      <Select className="mt-1">
                        <option value="en">English</option>
                        <option value="ha">Hausa</option>
                        <option value="yo">Yoruba</option>
                        <option value="ig">Igbo</option>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">
                          Enable offline mode for downloaded courses
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">
                          Receive email notifications for course updates
                        </span>
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">
                          Enable dark mode
                        </span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Security */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Security</CardTitle>
                  <CardDescription>
                    Manage your account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Change Password
                      </h4>
                      <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                        Update Password
                      </button>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Two-Factor Authentication
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Add an extra layer of security to your account
                      </p>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                        Enable 2FA
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Danger Zone */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  <CardDescription>
                    Irreversible and destructive actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Delete Account
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}