import {
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
	IAccountInstance,
	IContact,
	IDetailContact,
} from '../models/account';

export const accountDetail = createApi({
	reducerPath: 'accountDetail',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://api.green-api.com
`,
	}),
	tagTypes: ['getContacts', 'getContactInfo'],
	endpoints: (build) => ({
		getDetail: build.query<
			any,
			{ idInstance?: string; apiTokenInstance?: string }
		>({
			query: ({ idInstance, apiTokenInstance }) =>
				`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
		}),
		checkNumber: build.query<
			{ existsWhatsapp: boolean },
			{
				account: IAccountInstance;
				body: { phoneNumber: number };
			}
		>({
			query: ({ account, body }) => ({
				url: `waInstance${account.IdInstance}/CheckWhatsapp/${account.ApiTokenInstance}`,
				method: 'POST',
				headers: {
					'Content-type': 'Application/json',
				},
				body,
			}),
		}),
		getContacts: build.query<
			IContact[],
			IAccountInstance
		>({
			query: (account) => ({
				url: `waInstance${account.IdInstance}/getContacts/${account.ApiTokenInstance}`,
			}),
			providesTags: ['getContacts'],
		}),
		getContactDetail: build.query<
			IDetailContact,
			{
				account: IAccountInstance;
				body: { chatID: string };
			}
		>({
			query: ({ account, body }) => ({
				url: `waInstance${account.IdInstance}/getContactInfo/${account.ApiTokenInstance}`,
				method: 'POST',
				headers: {
					'Content-type': 'Application/json',
				},
				body,
			}),
			providesTags: ['getContactInfo'],
		}),
	}),
});

export const { useGetDetailQuery } = accountDetail;
