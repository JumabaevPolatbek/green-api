import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IContact } from '../models/account';
type State = {
	data: IContact;
};
const initialState: State = {
	data: {} as IContact,
};

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setContact: (
			state,
			action: PayloadAction<IContact>
		) => {
			state.data = action.payload;
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			console.log('HYDRATE', action.payload.contact);
			return {
				...state,
				...action.payload.contact,
			};
		},
	},
});

export const { setContact } = contactSlice.actions;
