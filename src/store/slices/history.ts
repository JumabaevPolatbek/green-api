import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { IGetChatHistory } from '../models/message';
import { HYDRATE } from 'next-redux-wrapper';
type State = {
	histroy: IGetChatHistory[];
};
const initialState: State = {
	histroy: [],
};

export const chatHistory = createSlice({
	name: 'chatHistory',
	initialState,
	reducers: {
		setHistory: (
			state,
			action: PayloadAction<IGetChatHistory[]>
		) => {
			state.histroy = action.payload;
		},
	},
	// extraReducers:{
	// 	[HYDRATE]: (state,action)=>{
	// 		const {id}=action.payload.contact
	// 		const res = fetch(
	// 			`https://api.green-api.com/waInstance${session.user.idInstance}/getChatHistory/${session.user.apiTokenInstance}`
	// 		);
	// 	}
	// }
});

export const { setHistory } = chatHistory.actions;
