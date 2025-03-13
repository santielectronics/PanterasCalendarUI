import { CalendarIcon } from "@/components/calendar-icon"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Panteras Calendar</h1>
        <Link href="/main-menu">
          <Menu className="h-6 w-6" />
        </Link>
      </div>

      <div className="flex justify-center mb-8">
        <CalendarIcon day="11" size="sm" />
      </div>

      <div className="bg-card rounded-lg p-6 mb-8">
        <div className="font-mono text-sm space-y-3">
          <p>Me: Create a calendar event for march 25th 2025 from 10 am to 12 pm</p>
          <p>&nbsp;</p>
          <p>Panteras: Event created successfully with</p>
          <p>ID: 3Peoqys91vfdqwfjl</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-primary text-primary-foreground rounded-md p-4 text-sm">
          <p className="text-gray-300">Start typing here...</p>
        </div>
      </div>
    </div>
  )
}

