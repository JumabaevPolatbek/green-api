import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import React from 'react';
import Conversation from '../components/Conversation/Conversation';
import Side from '../components/Side/Side';
import { IContact } from '../store/models/account';
type Props = {
	conatcs: IContact[];
};

export default function Home() {
	const session = useSession();
	console.log(session);
	return (
		<>
			<div className={`container app`}>
				<div className={`row app-one`}>
					<Side />
					<Conversation />
				</div>
			</div>
		</>
	);
}
