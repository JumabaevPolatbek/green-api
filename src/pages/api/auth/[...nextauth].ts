import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { sign } from 'crypto';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				idInstance: {
					label: 'idInstance',
					type: 'text',
					placeholder: 'Id Instance',
				},
				apiTokenInstance: {
					label: 'ApiTokenInstance',
					type: 'password',
				},
			},
			authorize: async (credentials, req) => {
				const { idInstance, apiTokenInstance } =
					credentials as any;
				const res = await fetch(
					`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
				);
				const user = await res.json();
				if (res.ok && user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,

	callbacks: {
		async jwt({ token, user }) {
			return { ...user, ...token };
		},
		async session({ session, user, token }) {
			session.user.apiTokenInstance = token.name;
			session.user.idInstance = token.email;
			session.user.statusInstance = token.image;
			return session;
		},
		async signIn({ credentials, user }) {
			if (user.image === 'authorized') {
				return true;
			} else {
				return false;
			}
		},
	},
	pages: {
		signIn: '/login',
	},
};
export default NextAuth(authOptions);
