import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = ()=> (
      <div className='intro-container'>
      <img className='iphone-screen' src='https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png'/>
      <nav className="login-signup">
        <img className='instapic-text' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38749082_1769735009788372_243286579940950016_n.jpg?_nc_cat=0&oh=6523cec7952760d9608eb243a59981c1&oe=5C121671' alt='insta_pic'/>
      <h2 className="header-name">Sign up to see photos and<br/>
      videos from your friends </h2>
    <Link to='/login'>Login</Link>
      <br/>
      <Link to="/signup">Sign up!</Link>
    </nav>
    </div>
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
