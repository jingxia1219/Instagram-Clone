import React from 'react';
import { Link } from 'react-router-dom';
import Login from '.././session_form/login_container';

const Greeting = ({ currentUser, logout, demoLogin }) => {
  const sessionLinks = () => <div className="intro-container">
      <img className="iphone-screen" src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png" />
      <img className="pic-one" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38774870_1770092733085933_601809438831017984_n.jpg?_nc_cat=0&oh=5a55211a4ea9706e80976e81e66dc2c6&oe=5BC8CD24" />
      <img className="pic-one" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/42205430_1830032543758618_394747364683808768_n.jpg?_nc_cat=108&oh=72784b3f1b24e3baaab3cc1d767996e3&oe=5C230927" />
      <img className="pic-one" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/42186859_1830032547091951_3816997269144600576_n.jpg?_nc_cat=103&oh=0dd61bfc07515856b64a3aeed69793d1&oe=5C289AD1" />
      <Login />
    </div>;
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
