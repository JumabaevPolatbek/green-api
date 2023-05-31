import {
	Action,
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { accountDetail } from './api/account';
import { getMessage } from './api/getMessage';
import { rootReducer } from './api/rootReducer';

// export const store =
// configureStore({
// 	reducer: rootReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware().concat(
// 			getMessage.middleware,
// 			accountDetail.middleware
// 		),
// });
const makeStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				getMessage.middleware,
				accountDetail.middleware
			),
	});
export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);
