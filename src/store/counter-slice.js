import { createSlice } from '@reduxjs/toolkit';

const initState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState: initState,
	reducers: {
		increment: state => {
			state.counter++;
		},
		decrement: state => {
			state.counter--;
		},
		increaseBy: (state, action) => {
			state.counter = state.counter + action.payload;
		},
		toggleCounter: state => {
			state.showCounter = !state.showCounter;
		},
	},
});

export default counterSlice;
export const { increment, decrement, increaseBy, toggleCounter } = counterSlice.actions;
