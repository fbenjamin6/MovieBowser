import nextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

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

  }
})

export { handler as GET, handler as POST }
