import React from 'react';
import { Link } from 'react-router-dom';
import Login from '.././session_form/login_container';

const Greeting = ({ currentUser, logout, demoLogin }) => {
  const sessionLinks = ()=> (
      <div className='intro-container'>
      <img className='iphone-screen' src='https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png'/>
      <img className='pic-one' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38774870_1770092733085933_601809438831017984_n.jpg?_nc_cat=0&oh=5a55211a4ea9706e80976e81e66dc2c6&oe=5BC8CD24"/>
      <Login />
      </div>
  );
  const personalGreeting = () => (
    <hgroup className="header">
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
      <h6>current user:{currentUser.username}</h6>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
