import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expencify</h1>
    <nav>
      <NavLink to='/' exact={true} activeClassName='is-active'>
        Home
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
    </nav>
  </header>
);

export default Header;
