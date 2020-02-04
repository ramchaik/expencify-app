import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends Component {
  render() {
    const { startLogin } = this.props;

    return (
      <div>
        <button onClick={startLogin}> Login </button>{' '}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
