export interface IGetSettingAccount {
	wid: string;
	countryInstance: string;
	typeAccount: string;
	webhookUrl: string;
	webhookUrlToken: string;
	delaySendMessagesMilliseconds: number;
	markIncomingMessagesReaded: string;
	markIncomingMessagesReadedOnReply: string;
	sharedSession: string;
	proxyInstance: string;
	outgoingWebhook: string;
	outgoingMessageWebhook: string;
	outgoingAPIMessageWebhook: string;
	incomingWebhook: string;
	deviceWebhook: string;
	statusInstanceWebhook: string;
	stateWebhook: string;
	enableMessagesHistory: string;
	keepOnlineStatus: string;
}
export interface IGetStateInstance {
	stateInstance: string;
}
export interface IGetStatusInstance {
	statusInstance: 'online' | 'offline';
}

export interface IAccountInstance {
	IdInstance: number;
	ApiTokenInstance: string;
}
export interface IContact {
	id: string;
	name: string;
	type: string;
}

// Detail contact
export interface IDetailContact {
	avatar: string;
	name: string;
	email: string;
	category: string;
	description: string;
	products: Product[];
	chatId: string;
	lastSeen: any;
	isArchive: boolean;
	isDisappearing: boolean;
	isMute: boolean;
	messageExpiration: number;
	muteExpiration: any;
}

export interface Product {
	id: string;
	imageUrls: ImageUrls;
	reviewStatus: ReviewStatus;
	availability: string;
	name: string;
	description?: string;
	price: any;
	isHidden: boolean;
}

export interface ImageUrls {
	requested: string;
	original: string;
}

export interface ReviewStatus {
	whatsapp: string;
}
export interface Avatar {
	existsWhatsapp: boolean;
	urlAvatar: string;
}
