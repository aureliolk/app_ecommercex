import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
        id:"github",
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      // @ts-ignore
      scope: "read:user",
    })
  ],

  secret: process.env.JWT_SECRET,

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  jwt: {
    secret: process.env.JWT_SECRET
  },

  pages: {},

  callbacks: {
    session({ session, token, user }) {
        return session // The return type will match the one returned in `useSession()`
      }
  },

  events: {},

  debug: false,
})