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
		getHistory: build.query<
			IGetChatHistory[],
			{
				Account: IAccountInstance;
				body: IGetChatHistory;
			}
		>({
			query: ({ Account, body }) => {
				return {
					url: `/waInstance${Account.IdInstance}/getChatHistory/${Account.ApiTokenInstance}`,
					headers: {
						'Content-type': 'Application/json',
					},
					body,
				};
			},
			providesTags: ['getChatHistory'],
		}),
		sendMessage: build.mutation<
			{ idMessage: string },
			{
				account: IAccountInstance;
				body: ISendMessage;
			}
		>({
			query: ({ account, body }) => {
				return {
					url: `waInstance${account.IdInstance}/sendMessage/${account.ApiTokenInstance}`,
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
	useGetHistoryQuery,
	useSendMessageMutation,
} = getMessage;
