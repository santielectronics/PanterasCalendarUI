import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export default function MenuPage() {
  return (
    <div className="max-w-md mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Panteras Calendar</h1>
        <Link href="/dashboard">
          <X className="h-6 w-6" />
        </Link>
      </div>

      <div className="space-y-4 mt-6">
        <Link href="/profile">
          <Button>Profile</Button>
        </Link>

        <Link href="/">
          <Button>Sign Out</Button>
        </Link>
      </div>
    </div>
  )
}

