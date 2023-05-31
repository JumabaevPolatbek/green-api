import { IContact } from '@/store/models/account';
import React from 'react';
import ConversationHead from './ConversationHead';
import ConversationMessage from './ConversationMessage';
import ConversationReply from './ConversationReply';
const Conversation: React.FC<{ contact: IContact }> = ({
	contact,
}) => {
	return (
		<div className={`col-sm-8 conversation`}>
			<ConversationHead name={contact.name} />
			<ConversationMessage />
			<ConversationReply />
		</div>
	);
};

export default Conversation;
