import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isLoggedIn ? <Redirect to='/dashboard' /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  isLoggedIn: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
