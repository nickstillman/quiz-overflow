import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    e.persist();
    console.log(e);
    console.log(e.target.signUp);
    console.log('username', e.target.username.value);
    console.log('password', e.target.password.value);
    console.log(e);
  }

  render() {
    const errorMsg = <div className="error">{this.props.message}</div>;
    return (
      <div id="login">
        <form id="loginForm" onSubmit={this.onSubmit}>
          <input
            className="username"
            name="username"
            placeholder="Username"
            type="text"
          />
          <input
            className="password"
            name="password"
            placeholder="Password"
            type="password"
          />
          <input
            className="submit"
            type="submit"
            id="signIn1"
            name="signIn"
            value="Sign in"
          />
          <input
            className="submit"
            type="submit"
            id="signIn2"
            name="signUp"
            value="Sign up"
          />
        </form>
        <a onClick={this.props.goToSignup} name="#">
          Need an account?
        </a>
        <div className="errorMessage">
          {this.props.loginFailure ? errorMsg : ''}
        </div>
      </div>
    );
  }
}

export default Login;
