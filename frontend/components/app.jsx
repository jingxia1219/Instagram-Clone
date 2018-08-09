import React from 'react';
import {Provider} from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Dashboard from './dashboard/dashboard_container';

// const Dashboard = () => <h1>Hello!</h1>;

const App = () => (
  <div>
    <header>

    </header>
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} /> //log out
      <AuthRoute exact path='/' component={GreetingContainer} /> //log out
      <AuthRoute exact path='/signup' component={SignupFormContainer} /> //log out
      <ProtectedRoute path ='/dashboard' component={Dashboard} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
