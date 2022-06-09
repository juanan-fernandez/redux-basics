import { createStore } from 'redux';

const initState = { counter: 0, showCounter: true };
const counterReducer = (state = initState, action) => {
	if (action.type === 'INCREMENT') {
		return { ...state, counter: state.counter + 1 };
	}
	if (action.type === 'DECREMENT') {
		return { ...state, counter: state.counter - 1 };
	}

	if (action.type === 'INCREASE_BY') {
		return { ...state, counter: state.counter + action.value };
	}

	if (action.type === 'TOGGLE_COUNTER') {
		return { ...state, showCounter: !state.showCounter };
	}

	return state;
};

const store = createStore(counterReducer, initState);

export default store;
