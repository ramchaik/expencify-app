import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Link } from 'react-router-dom';

export const Header = ({ startLogout }) => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <Link className='header__title' to='/' exact={true}>
          <h1> Expencify </h1>
        </Link>{' '}
        <button onClick={startLogout}> Logout </button>{' '}
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
