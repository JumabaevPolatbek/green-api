import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "idInstance",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "ApiTokenInstance",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const { idInstance, apiTokenInstance } = credentials as any;
        const res = await fetch(
          `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
        );
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          return {
            id: idInstance,
            name: apiTokenInstance,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // async jwt({ token, user }) {
    //   return { ...user };
    // },
    async session({ session, user }) {
      session.user.apiTokenInstance = user.name;
      session.user.idInstance = user.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
