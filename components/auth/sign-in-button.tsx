"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function SignInButton() {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    return (
      <Button onClick={() => signOut({ callbackUrl: "/" })} className="bg-primary text-primary-foreground">
        Sign out
      </Button>
    )
  }

  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="bg-primary text-primary-foreground"
    >
      Sign in with Google
    </Button>
  )
}

