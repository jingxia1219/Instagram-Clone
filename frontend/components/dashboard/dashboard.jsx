import React from 'react';

const personalGreeting = ({currentUser, logout}) => {
  return (
  <hgroup className="header-group">
    <button className="logout-button" onClick={logout}>
      Log Out
    </button>
    <p>current user:{currentUser.username}</p>
  </hgroup>
);
};

export default personalGreeting;
