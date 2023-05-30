import NextAuth from 'next-auth';
declare module 'next-auth' {
	interface Session {
		user: {
			idInstance: string | null | undefined;
			apiTokenInstance: string | null | undefined;
			statusInstance: string | null | undefined;
		};
	}
}
