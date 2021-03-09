import React from 'react';
import { connect } from 'react-redux';
import AuthContainer from './containers/AuthContainer';
import CardContainer from './containers/CardContainer';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
});

const App = (props) => {
  const auth = props.loggedIn ? (<CardContainer />) : (<AuthContainer />);

  return (
    <div className="mainContainer">
    {auth}
    </div>
  );
};

export default connect(mapStateToProps)(App);
