import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuth: false };

const authSlice = createSlice({
	name: 'authenticacion',
	initialState: initialAuthState,
	reducers: {
		login: state => {
			state.isAuth = true;
		},

		logout: state => {
			state.isAuth = false;
		},
	},
});

export default authSlice;
export const { login, logout } = authSlice.actions;
