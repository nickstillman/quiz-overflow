import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import AuthContainer from './containers/AuthContainer';
import CardContainer from './containers/CardContainer';
import * as authActions from './actions/authActions';
import PlayerStats from './components/PlayerStats';

const mapStateToProps = (state) => ({
  // from: the store
  // Current default: false
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  changeLoginStatus: (bool) => dispatch(authActions.changeLoginStatus(bool)),
  checkSession: () => dispatch(authActions.checkSession()),
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('component mounted!');
    const SSID = Cookies.get('ssid');
    const loginStatus = SSID ? true : false;

    this.props.changeLoginStatus(loginStatus);
    // this.props.checkSession();
  }

  render() {
    console.log('status', this.props.loggedIn);
    const auth = this.props.loggedIn ? <CardContainer /> : <AuthContainer />;

    return (
      <div className="mainContainer">
        {auth}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
