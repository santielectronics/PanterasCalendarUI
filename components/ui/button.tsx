import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "google"
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full py-3 px-4 rounded-md font-medium text-center transition-colors",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

