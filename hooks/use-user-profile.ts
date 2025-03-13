"use client"

import { useSession } from "next-auth/react"

export function useUserProfile() {
  const { data: session } = useSession()

  return {
    name: session?.user?.name || "Guest User",
    email: session?.user?.email || "guest@example.com",
    image: session?.user?.image || "/placeholder.svg?height=96&width=96",
    timeZone: "UTC-6", // Default or could be fetched from user preferences
    workingLocation: "Home office", // Default or could be fetched from user preferences
  }
}

