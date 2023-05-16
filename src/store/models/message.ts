export interface IIncomingMessageReceived {
	typeWebhook: string;
	instanceData: InstanceData;
	timestamp: number;
	idMessage: string;
	senderData: SenderData;
	messageData: MessageData;
}

export interface InstanceData {
	idInstance: number;
	wid: string;
	typeInstance: string;
}

export interface SenderData {
	chatId: string;
	sender: string;
	chatName: string;
	senderName: string;
}

export interface MessageData {
	typeMessage: string;
	textMessageData: TextMessageData;
}

export interface TextMessageData {
	textMessage: string;
}
export interface IGetChatHistory {
	type: string;
	idMessage: string;
	timestamp: number;
	typeMessage: string;
	chatId: string;
	textMessage: string;
	extendedTextMessage: ExtendedTextMessage;
	statusMessage: string;
	sendByApi: boolean;
}

export interface ExtendedTextMessage {
	text: string;
	description: string;
	title: string;
	previewType: string;
	jpegThumbnail: string;
	forwardingScore: any;
	isForwarded: any;
}

export interface IGetChatHistory {
	chatId: string;
	count: number;
}
export interface ISendMessage {
	chatId: string;
	message: string;
}