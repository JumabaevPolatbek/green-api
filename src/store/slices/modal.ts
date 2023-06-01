import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
type State = {
	modal: boolean;
};
const initialState: State = {
	modal: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModal: (state, action: PayloadAction) => {
			state.modal = !state.modal;
		},
	},
});

export const { setModal } = modalSlice.actions;
