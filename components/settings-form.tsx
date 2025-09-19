"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-guard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { User, Mail, Phone, MapPin, Save } from "lucide-react"

interface UserProfile {
  name: string
  email: string
  phone: string
  location: string
  bio: string
  state: string
  skills: string[]
}

export function SettingsForm() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    state: "",
    skills: []
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  // Nigerian states for dropdown
  const nigerianStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
  ]

  // Load user profile from localStorage on component mount
  useEffect(() => {
    if (user) {
      const savedProfile = localStorage.getItem(`skillhub_profile_${user.id}`)
      if (savedProfile) {
        setProfile(JSON.parse(savedProfile))
      } else {
        // Initialize with basic user data
        setProfile(prev => ({
          ...prev,
          name: user.name || "",
          email: user.email || ""
        }))
      }
    }
  }, [user])

  const handleInputChange = (field: keyof UserProfile, value: string | string[]) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }))
    setIsSaved(false)
  }

  const handleSave = async () => {
    if (!user) return
    
    setIsLoading(true)
    try {
      // Save to localStorage (in a real app, this would be an API call)
      localStorage.setItem(`skillhub_profile_${user.id}`, JSON.stringify(profile))
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 3000)
    } catch (error) {
      console.error("Error saving profile:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) return null

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Full Name
          </Label>
          <Input
            id="name"
            value={profile.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Phone Number
          </Label>
          <Input
            id="phone"
            value={profile.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+234 XXX XXX XXXX"
          />
        </div>

        {/* State */}
        <div className="space-y-2">
          <Label htmlFor="state" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            State
          </Label>
          <Select
            id="state"
            value={profile.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
          >
            <option value="">Select your state</option>
            {nigerianStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">
          City/Local Government Area
        </Label>
        <Input
          id="location"
          value={profile.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
          placeholder="Enter your city or LGA"
        />
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <Label htmlFor="bio">
          Bio/About You
        </Label>
        <Textarea
          id="bio"
          value={profile.bio}
          onChange={(e) => handleInputChange("bio", e.target.value)}
          placeholder="Tell us about yourself, your interests, and your learning goals..."
          className="h-24 resize-none"
        />
      </div>

      {/* Skills Interest */}
      <div className="space-y-2">
        <Label htmlFor="skills">
          Skills of Interest (comma-separated)
        </Label>
        <Input
          id="skills"
          value={profile.skills.join(", ")}
          onChange={(e) => handleInputChange("skills", e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
          placeholder="e.g., Baking, Tailoring, Welding, Digital Marketing"
        />
        <p className="text-xs text-gray-500">
          This helps us recommend relevant courses for you
        </p>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4 pt-4 border-t">
        <Button 
          onClick={handleSave}
          disabled={isLoading}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
        
        {isSaved && (
          <span className="text-sm text-emerald-600 font-medium">
            ✓ Profile saved successfully!
          </span>
        )}
      </div>
    </div>
  )
}