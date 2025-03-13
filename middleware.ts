import { getToken } from "next-auth/jwt"
import { type NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/" || path === "/error" || path === "/all-screens"

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })
console.log(token)
  // Redirect to login if accessing protected route without being authenticated
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  // Redirect to dashboard if already logged in and trying to access login page
  if (isPublicPath && token && path === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}

// Configure which routes use this middleware
export const config = {
  matcher: ["/", "/dashboard", "/profile", "/menu", "/main-menu"],
}

