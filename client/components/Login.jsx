import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    if (e.target.id === 'signInBtn' || e.target.id === 'guest') {
      this.props.handleLogin(e);
    } else {
      this.props.handleSignUp(e);
    }
  }

  render() {
    // console.log('Login render fired...');
    const errorMsg = <span className="error">{this.props.message}</span>;
    const guestLogin = (
      <span className="guest" id="guest" onClick={this.onSubmit}>
        Play as a Guest
      </span>
    );

    return (
      <div id="login">
        <form className="loginField">
          <input id="username" placeholder="Username" type="text" />
          <br />
          <input id="password" placeholder="Password" type="password" />
          <br />
          <div className="loginButtons">
            <button id="signInBtn" onClick={this.onSubmit}>
              Log In
            </button>
            <button id="signUpBtn" onClick={this.onSubmit}>
              Sign Up
            </button>
          </div>
        </form>
        <div className="loginFooter">
          {this.props.loginFailure ? errorMsg : guestLogin}
        </div>
      </div>
    );
  }
}

export default Login;
