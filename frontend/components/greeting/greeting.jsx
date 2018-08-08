import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = ()=> (
    <nav className="login-signup">
      <img className='iphone-screen' src='https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png'/>
      <h2 className="header-name">Sign up to see photos and<br/>
      videos from your friends </h2>
      <Link to='/login'>Login</Link>
      <br/>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
      <p>current user:{currentUser.username}</p>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
