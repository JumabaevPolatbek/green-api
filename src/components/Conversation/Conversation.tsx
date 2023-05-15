import React from 'react';
import ConversationHead from './ConversationHead';
import ConversationMessage from './ConversationMessage';
import ConversationReply from './ConversationReply';
const Conversation = () => {
	return (
		<div className={`col-sm-8 conversation`}>
			<ConversationHead />
			<ConversationMessage />
			<ConversationReply />
		</div>
	);
};

export default Conversation;
