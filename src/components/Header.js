import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/auth-slice';

const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.auth.isAuth);

	const logOutHandler = () => {
		dispatch(logout());
	};

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					<li>
						<a href='/'>My Products</a>
					</li>
					<li>
						<a href='/'>My Sales</a>
					</li>
					{isAuth && (
						<li>
							<button onClick={logOutHandler}>Logout</button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
