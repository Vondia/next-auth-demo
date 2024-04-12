import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials?.username === "admin") {
          const user = {
            id: "1",
            name: "Super User",
            claims: ["admin", "user"],
            email: "admin@fedxt.com",
            token: "6CYMeVLKEylABOF2s72/Q03nOiWM4exyIjWHsBLiz7I=",
          };
          return user;
        } else {
          const user = {
            id: "2",
            name: "Just a User",
            claims: ["user"],
            email: "user@example.com",
            token: "NHhlLP8DNbwGBi/ZC5otwcRDxYjJj6hHjT3SSKp4fyM=",
          };
          return user;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user , token }) {
      if (user) {  // Note that this if condition is needed
        token.user={...user}
      }
      return token
     },
    async session({ session, token }) {
      if (token?.user) { // Note that this if condition is needed
        session.user = token.user;
      }
      return session
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };