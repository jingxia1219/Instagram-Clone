import React from 'react';

const personalGreeting = ({currentUser, logout}) => {
  return (
    <div>
  <hgroup className="header-group">
    <div className='dashboard-navbar'>
    <img className='insta-logo' src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" ></img>
    <img className="instapic-small" src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38749082_1769735009788372_243286579940950016_n.jpg?_nc_cat=0&oh=6523cec7952760d9608eb243a59981c1&oe=5C121671'></img>
    <img className='search-img' src='https://www.freeiconspng.com/uploads/search-icon-png-1.png'/>
    <input className="search-box" type="text" placeholder="Search"></input>
    <img className="empty-heart" src="https://static.thenounproject.com/png/773083-200.png" />
    </div>
  </hgroup>
  <button className="logout-button" onClick={logout}>
    Log Out
  </button>
  <p>current user:{currentUser.username}</p>
  </div>
);
};

export default personalGreeting;
