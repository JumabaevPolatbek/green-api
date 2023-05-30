import { IContact } from '@/store/models/account';
import { IGetChatHistory } from '@/store/models/message';
import { useSession } from 'next-auth/react';
import React from 'react';
import ConversationHead from './ConversationHead';
import ConversationMessage from './ConversationMessage';
import ConversationReply from './ConversationReply';
const Conversation: React.FC<{ contact: IContact }> = ({
	contact,
}) => {
	const [history, setHistory] = React.useState(
		[] as IGetChatHistory[]
	);
	const session = useSession();
	// React.useEffect(() => {
	// 	const body = {
	// 		chatId: contact.id,
	// 		count: 10,
	// 	};
	// 	if (session.data?.user?.email) {
	// 		const res = fetch(
	// 			`https://api.green-api.com/waInstance${session.data?.user?.email}/getChatHistory/${session.data?.user?.name}
	// `,
	// 			{
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'Application/JSON',
	// 				},
	// 				body: JSON.stringify(body),
	// 			}
	// 		)
	// 			.then((res) => res.json())
	// 			.then((json) => setHistory(json));
	// 	}
	// }, []);
	// console.log(history);
	return (
		<div className={`col-sm-8 conversation`}>
			<ConversationHead name={contact.name} />
			<ConversationMessage />
			<ConversationReply />
		</div>
	);
};

export default Conversation;
