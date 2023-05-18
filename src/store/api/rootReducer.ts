import { combineReducers } from '@reduxjs/toolkit';
import { accountDetail } from './account';
import { getMessage } from './getMessage';

export const rootReducer = combineReducers({
	[getMessage.reducerPath]: getMessage.reducer,
	[accountDetail.reducerPath]: accountDetail.reducer,
});
