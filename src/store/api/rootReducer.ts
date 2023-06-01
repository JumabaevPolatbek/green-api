import { combineReducers } from '@reduxjs/toolkit';
import { contactSlice } from '../slices/contact';
import { chatHistory } from '../slices/history';
import { modalSlice } from '../slices/modal';
import { accountDetail } from './account';
import { getMessage } from './getMessage';

export const rootReducer = combineReducers({
	[getMessage.reducerPath]: getMessage.reducer,
	[accountDetail.reducerPath]: accountDetail.reducer,
	[modalSlice.name]: modalSlice.reducer,
	[contactSlice.name]: contactSlice.reducer,
	[chatHistory.name]: chatHistory.reducer,
});
