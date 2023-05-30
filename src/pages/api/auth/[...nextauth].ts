import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { sign } from 'crypto';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'idInstance',
					type: 'text',
					placeholder: 'jsmith',
				},
				password: {
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
				const data = await res.json();

				if (res.ok && data) {
					return {
						id: idInstance,
						name: apiTokenInstance,
						email: idInstance,
						image: data.stateInstance,
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
		// async session({ session, user }) {
		// 	session.user.apiTokenInstance = user.name;
		// 	session.user.idInstance = user.email;
		// 	session.user.statusInstance = user.image;
		// 	return session;
		// },
		async signIn({ credentials, user }) {
			// const { idInstance, apiTokenInstance } =
			// 	credentials as any;
			// const res = await fetch(
			// 	`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
			// );
			// const data = await res.json();
			// if (data.stateInstance === 'authorized') {
			// 	return true;
			// } else {
			// 	return false;
			// }
			console.log(user);
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
