import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      idInstance?: string | null;
      apiTokenInstance?: string | null;
    };
  }
}

