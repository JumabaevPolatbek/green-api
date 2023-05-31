import {
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';
import {
	useSession,
	signOut,
	getSession,
} from 'next-auth/react';
import React from 'react';
import Conversation from '../components/Conversation/Conversation';
import Side from '../components/Side/Side';
import { IContact } from '../store/models/account';
type Props = {
	conatcs: IContact[];
};

export const getServerSideProps: GetServerSideProps<{
	contacts: IContact[];
}> = async (ctx) => {
	const session = await getSession(ctx);
	const idInstance = session?.user.idInstance || '';
	const apiTokenInstance =
		session?.user.apiTokenInstance || '';
	const res = await fetch(
		`https://api.green-api.com/waInstance${idInstance}/getContacts/${apiTokenInstance}`
	);

	return {
		props: { contacts: await res.json() },
	};
};

function Page({
	contacts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const session = useSession();
	const [id, setId] = React.useState<IContact>(
		contacts[0]
	);
	return (
		<>
			<div className={`container app`}>
				<button onClick={() => signOut()}>
					Log out
				</button>
				<div className={`row app-one`}>
					<Side
						contacts={contacts}
						setId={setId}
					/>
					<Conversation contact={id} />
				</div>
			</div>
		</>
	);
}
export default Page;
