import React from 'react';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { NavLink } from 'react-router-dom';

export const Header = ({ startLogout }) => (
	<header>
		<h1>Expencify</h1>
		<header>
			<NavLink to='/' exact={true} activeClassName='is-active'>
				Dashboard
			</NavLink>
			<NavLink to='/create' activeClassName='is-active'>
				Create
			</NavLink>
			<NavLink to='/edit' activeClassName='is-active'>
				Edit
			</NavLink>
			<NavLink to='/help' activeClassName='is-active'>
				Help
			</NavLink>
			<button onClick={startLogout}>Logout</button>
		</header>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
