import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { signup, login } from './actions/session_actions';
document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  // window.signup = signup;
  // window.login = login;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, document.getElementById("root"));
});
