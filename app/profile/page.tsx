"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useUserProfile } from "@/hooks/use-user-profile"

export default function ProfilePage() {
  const user = useUserProfile()

  return (
    <div className="max-w-md mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Link href="/main-menu">
          <Menu className="h-6 w-6" />
        </Link>
      </div>

      <div className="bg-card rounded-lg p-6 space-y-6">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-accent overflow-hidden">
            <img src={user.image || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="space-y-3 font-mono text-sm">
          <p>
            <span className="font-bold">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-bold">e-mail:</span> {user.email}
          </p>
          <p>
            <span className="font-bold">Time zone:</span> {user.timeZone}
          </p>
          <p>
            <span className="font-bold">Working location:</span> {user.workingLocation}
          </p>
        </div>
      </div>
    </div>
  )
}

