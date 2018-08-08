import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const loggedOut = ()=> (
    <nav className="login-signup">
      <Link to='/login'>Login</Link>
      <br/>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const loggedIn = () => (
    <hgroup className="header-group">
      <h2 className="header-name">InstaPic </h2>
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );
  return currentUser ? loggedIn() : loggedOut();
};

export default Greeting;
