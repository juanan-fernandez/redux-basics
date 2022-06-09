import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);
	const show = useSelector(state => state.showCounter);
	const toggleCounterHandler = () => {
		dispatch({ type: 'TOGGLE_COUNTER' });
	};

	const incrementHandler = () => {
		dispatch({ type: 'INCREMENT' });
	};

	const decrementHandler = () => {
		dispatch({ type: 'DECREMENT' });
	};

	const increaseHandler = increaseBy => {
		dispatch({ type: 'INCREASE_BY', value: increaseBy });
	};
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div className={classes.button}>
				<button onClick={incrementHandler}>+</button>
				<button onClick={() => increaseHandler(5)}>Increase by 5</button>
				<button onClick={decrementHandler}>-</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
