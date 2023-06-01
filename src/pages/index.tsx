import { AppState, wrapper } from '@/store';
import { IGetChatHistory } from '@/store/models/message';
import { setContact } from '@/store/slices/contact';
import {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from 'next';
import { signOut, getSession } from 'next-auth/react';
import React from 'react';
import Conversation from '../components/Conversation/Conversation';
import Side from '../components/Side/Side';
import { IContact } from '../store/models/account';
type Props = {
	contacts: IContact[];
	history:IGetChatHistory[]
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
export const getServerSideProps: GetServerSideProps<Props> =
	wrapper.getServerSideProps((store) => async (ctx) => {
		try {
			const session = await getSession(ctx);

			const idInstance =
				session?.user.idInstance || '';
			const apiTokenInstance =
				session?.user.apiTokenInstance || '';
			const chatId = store.getState().contact.data.id;
			const [data] = await Promise.all([
				fetch(
					`https://api.green-api.com/waInstance${idInstance}/getContacts/${apiTokenInstance}`
				),
			]);
			// const contact = data.json()
			// store.dispatch(setContact(contact[0]))
			const [chat, tag] = await Promise.all([
				data.json(),
				fetch(
					`https://api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
					{
						method: 'POST',
						headers: {
							'Content-type':
								'Application/JSON',
						},
						body: JSON.stringify({
							chatId: chatId,
							count: 10,
						}),
					}
				),
				,
			]);
			store.dispatch(setContact(chat[83]));
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
					history: await tag.json(),
				},
			};
		} catch (err) {
			console.log(err);
			return {
				props: err,
			};
		}
	});
const Page:NextPage<Props>=({contacts})=> {
	console.log('contacts', contacts);
	// console.log('history', history);
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
