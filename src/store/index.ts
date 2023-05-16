import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getMessage } from './api/getMessage';
import { rootReducer } from './api/rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: [getMessage.middleware],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch =
	useDispatch;
