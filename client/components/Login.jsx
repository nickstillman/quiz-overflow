import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    e.preventDefault();
    e.persist();
    console.log(e.target.id)
  }

  render() {
    const errorMsg = <div className="error">{this.props.message}</div>;
    return (
      <div id="login">
        <form id="loginForm">
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
            onClick={this.onSubmit}
            className="submit"
            type="submit"
            id="signIn"
            name="signIn"
            value="Sign in"
          />
          <input
            onClick={this.onSubmit}
            className="submit"
            type="submit"
            id="signUp"
            name="signUp"
            value="Sign up"
          />

          {/* Alternative: use a regular button without type='submit' Allows more styling/control of element */}
          <button id="signInBtn" onClick={this.onSubmit}>Sign in</button>
          <button id="signUpBtn" onClick={this.onSubmit}>Sign up</button>
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
