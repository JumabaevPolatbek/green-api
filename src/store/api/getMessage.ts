import {
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { IAccountInstance } from '../models/account';
import {
	IGetChatHistory,
	ISendMessage,
} from '../models/message';

export const getMessage = createApi({
	reducerPath: 'getMessage',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://api.green-api.com
`,
	}),
	tagTypes: ['getChatHistory'],
	endpoints: (build) => ({
		getHistory: build.mutation<
			IGetChatHistory[],
			{
				account: {
					idInstance?: string | null;
					apiTokenInstance?: string | null;
				};
				chatId: string;
			}
		>({
			query: ({ account, chatId }) => {
				return {
					url: `/waInstance${account?.idInstance}/getChatHistory/${account?.apiTokenInstance}`,
					headers: {
						'Content-type': 'Application/json',
					},
					body: ({
						chatId: chatId,
						count: 10,
					}),
				};
			},
			// invalidatesTags: ['getChatHistory'],
		}),
		sendMessage: build.mutation<
			{ idMessage: string },
			{
				account?: {
					idInstance?: string | null;
					apiTokenInstance?: string | null;
				};
				body: ISendMessage;
			}
		>({
			query: ({ account, body }) => {
				return {
					url: `waInstance${account?.idInstance}/sendMessage/${account?.apiTokenInstance}`,
					headers: {
						'Content-type': 'Application/json',
					},
					body,
				};
			},
		}),
	}),
});

export const {
	useGetHistoryMutation,
	useSendMessageMutation,
} = getMessage;
