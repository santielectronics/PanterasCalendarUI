import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/error",
  },
  callbacks: {
    async session({ session, token }) {
      // Add user info to the session
      if (session.user) {
        session.user.id = token.sub
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
  },
}

const handler = NextAuth(options)
export { handler as GET, handler as POST }
