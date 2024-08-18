import nextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { signIn } from 'next-auth/react'
import prisma from '@/lib/db/db'

const handler = nextAuth.default({
  providers: [
    GithubProvider.default({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    GoogleProvider.default({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })
  ],
  callbacks: {
    async signIn ({ user, account }) {
      const { id, name, email } = user
      const { provider } = account

      const userFind = await prisma.user.findFirst({
        where: {
          email,
          name,
          provider
        }
      })

      if (userFind) return true

      await prisma.user.create({
        data: {
          email,
          name,
          provider
        }
      })

      return true
    }
  }
})

export { handler as GET, handler as POST }
