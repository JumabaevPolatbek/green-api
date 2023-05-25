import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { useGetDetailQuery } from '@/store/api/account';

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	providers: [
		// GithubProvider({
		// 	clientId:process.env.NEXTAUTH_URL
		// }),
		// ...add more providers here
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
			authorize: async (credentials) => {
				const { idInstance, apiTokenInstance } =
					credentials as any;
				const res = await fetch(
					`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
				);
				const data = await res.json();
				// const user = {
				// 	idInstance: credentials?.username,
				// 	apiTokenInstance: credentials?.password,
				// };
				console.log(data);
				console.log(idInstance);
				if (data.stateInstance === 'authorized') {
					return {
						id: idInstance,
						name: apiTokenInstance,
					};
				} else {
					return null;
				}
				// if (credentials?.username==='polat') {
				// 	return {
				// 		id:'1',
				// 		name:'polat'
				// 	}
				// } else {
				// 	return null;
				// }
				// if(credentials?.username==='polat' && credentials.password==='test'){
				// 	return {
				// 		name:'Polat',
				// 		id:'1'
				// 	}
				// } else {return null}
			},

			// async authorize(credentials, req) {
			// 	const { username, password } =
			// 		credentials as any;
			// 	const res = await fetch(
			// 		'https://ecommerce.icedev.uz/token',
			// 		{
			// 			method: 'POST',
			// 			headers: {
			// 				'Content-type':
			// 					'application/x-www-form-urlencoded;charset=UTF-8',
			// 			},
			// 			body:
			// 				encodeURIComponent('username') +
			// 				'=' +
			// 				encodeURIComponent(username) +
			// 				'&&' +
			// 				encodeURIComponent('password') +
			// 				'=' +
			// 				encodeURIComponent(password),
			// 		}
			// 	);
			// 	const user = await res.json();
			// 	if (res.ok && user) {
			// 		return user;
			// 	} else return null;
			// },
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,

	// callbacks: {
	// 	async jwt({ token, user }) {
	// 		return { ...token, ...user };
	// 	},
	// async session({ session, token, user }) {
	// 	session.user.decode = jwtDecode(
	// 		token.access_token || ' '
	// 	);
	// 	session.user.token = token;
	// 	return session;
	// },
	// },
	pages: {
		signIn: '/login',
	},
};
export default NextAuth(authOptions);
