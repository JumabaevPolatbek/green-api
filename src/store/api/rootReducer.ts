import { combineReducers } from '@reduxjs/toolkit';
import { getMessage } from './getMessage';

export const rootReducer = combineReducers({
	[getMessage.reducerPath]: getMessage.reducer,
});
