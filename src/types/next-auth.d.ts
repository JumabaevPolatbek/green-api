import NextAuth from 'next-auth';
declare module 'next-auth' {
	interface Session {
		user: {
			idInstance: string | undefined | null;
			apiTokenInstance: string | undefined | null;
			statusInstance: string | nundefinedull | null;
		};
	}
}
