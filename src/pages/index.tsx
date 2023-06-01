import { wrapper } from '@/store';
import { setContact } from '@/store/slices/contact';
import {
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';
import { signOut, getSession } from 'next-auth/react';
import React from 'react';
import Conversation from '../components/Conversation/Conversation';
import Side from '../components/Side/Side';
import { IContact } from '../store/models/account';
type Props = {
	conatcs: IContact[];
};

// export const getServerSideProps: GetServerSideProps<{
// 	contacts: IContact[];
// }> = async (ctx) => {
// 	const session = await getSession(ctx);
// 	const idInstance = session?.user.idInstance || '';
// 	const apiTokenInstance =
// 		session?.user.apiTokenInstance || '';
// 	const res = await fetch(
// 		`https://api.green-api.com/waInstance${idInstance}/getContacts/${apiTokenInstance}`
// 	);

// 	return {
// 		props: { contacts: await res.json() },
// 	};
// };
export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps((store) => async (ctx) => {
		try {
			const session = await getSession(ctx);

			const idInstance =
				session?.user.idInstance || '';
			const apiTokenInstance =
				session?.user.apiTokenInstance || '';
			const [data, tagData] = await Promise.all([
				fetch(
					`https://api.green-api.com/waInstance${idInstance}/getContacts/${apiTokenInstance}`
				),
				fetch(
					`https://api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
					{
						method: 'POST',
						headers: {
							'Content-type':
								'Application/JSON',
						},
						body: JSON.stringify({
							chatId: '998977879591@c.us',
							count: 10,
						}),
					}
				),
			]);
			const [chat, tag] = await Promise.all([
				data.json(),
				tagData.json(),
			]);
			// const res = await fetch(
			// 	`https://api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
			// 	{
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-type': 'Application/JSON',
			// 		},
			// 		body: JSON.stringify({
			// 			chatId: '998977879591@c.us',
			// 			count: 10,
			// 		}),
			// 	}
			// );

			// const data = await res.json();
			// console.log(data);
			// console.log(
			// 	store.dispatch(setContact(data[0]))
			// );
			// console.log('state Contact', store.getState());
			// store.dispatch({
			// 	type: 'contact/setContact',
			// 	payload: data[0],
			// });
			return {
				props: {
					contacts: chat,
					history: tag,
				},
			};
		} catch (err) {
			console.log(err);
			return {
				props: err,
			};
		}
	});
function Page({
	contacts,
	history,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	console.log('contacts', contacts);
	console.log('history', history);
	return (
		<>
			<div className={`container app`}>
				{/* <button onClick={() => signOut()}>
					Log out
				</button> */}
				<div className={`row app-one`}>
					{/* <Side contacts={contacts} /> */}
					{/* <Conversation /> */}
				</div>
			</div>
		</>
	);
}
// Page.getInitialProps = wrapper.getInitialAppProps(
// 	(store) => (ctx) => {
// 		const { req, pathname } = ctx;
// 		const session = getSession({ req });
// 		console.log(session);
// 		return {
// 			props: {
// 				data: [],
// 			},
// 		};
// 	}
// );
export default Page;
