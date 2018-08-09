import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '.././session_form/login_container';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = ()=> (
      <div className='intro-container'>
      <img className='iphone-screen' src='https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png'/>
      <img className='pic-one' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38742210_1770089993086207_8102557251031531520_n.jpg?_nc_cat=0&oh=7a170c59fa5cf405b369b2dd093dbec1&oe=5BCD0AFC"/>
      <SignupFormContainer />
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header">
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
      <p>current user:{currentUser.username}</p>
    </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
