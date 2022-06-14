import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/auth-slice';

const Auth = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.auth.isAuth);

	const submitHandler = ev => {
		ev.preventDefault();
		dispatch(login());
	};

	const displayForm = (
		<section>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' />
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' />
				</div>
				<button type='submit'>Login</button>
			</form>
		</section>
	);
	const displayWelcome = <p>Welcome</p>;

	return <main className={classes.auth}>{isAuth ? displayWelcome : displayForm}</main>;
};

export default Auth;
