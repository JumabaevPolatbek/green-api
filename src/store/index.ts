import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { accountDetail } from './api/account';
import { getMessage } from './api/getMessage';
import { rootReducer } from './api/rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			getMessage.middleware,
			accountDetail.middleware
		),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch =
	useDispatch;
