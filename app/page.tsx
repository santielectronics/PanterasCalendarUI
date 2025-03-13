import { CalendarIcon } from "@/components/calendar-icon"
import { SignInButton } from "@/components/auth/sign-in-button"

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto py-12 flex flex-col items-center min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-12">Panteras Calendar</h1>

      <div className="flex-1 flex flex-col items-center justify-center">
        <CalendarIcon day="11" size="lg" />
      </div>

      <div className="w-full mb-8">
        <SignInButton />
      </div>
    </div>
  )
}

