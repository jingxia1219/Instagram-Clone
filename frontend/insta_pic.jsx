import React from 'react';
import ReactDOM from 'react-dom';
import {
  login, signup, logout
} from './util/session_api_util';

// import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", ()=>{
  // const store = configureStore();
  console.log(signup);
  window.signup = signup;
  window.login =login;
  ReactDOM.render(<h2>Welcome to InstaPic page</h2>, document.getElementById("root"));
});
