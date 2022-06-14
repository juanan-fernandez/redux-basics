import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increaseBy, toggleCounter } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();

	const counter = useSelector(state => state.counter.counter);
	const show = useSelector(state => state.counter.showCounter);

	const toggleCounterHandler = () => {
		dispatch(toggleCounter());
	};

	const incrementHandler = () => {
		dispatch(increment());
	};

	const decrementHandler = () => {
		dispatch(decrement());
	};

	const increaseHandler = increaseByNumber => {
		dispatch(increaseBy(increaseByNumber));
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
