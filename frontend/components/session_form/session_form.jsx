import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  update(field) {
    return e => this.setState({
      [field]: e.target.value,
    });

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge( {}, this.state);
    this.props.processForm(user);
  }

  renderErrors(){
    return (<ul>
      {this.props.errors.map( (error,i ) =>
        <li key={`${i}`}>
          {error}
        </li>
      )}
    </ul>
  );
  }

  signup(){
   if ( this.props.formType === 'signup' ){
      return  (
        <div>
          <label>Email:
            <input className="login-input" type="text" onChange={this.update('email')} value={this.state.email}></input>
          </label>
        </div>
      );
    }
  }

  render(){
    const signupEmail = this.signup();
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          Welcome to InstaPic!
          <br/>
          Please {this.props.formType} or <Link to={this.props.navLink}>{this.props.navLink}</Link>
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <br />
            <label>Password:
              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
                />
            </label>
            {signupEmail}
            <br/>
            <input className='session-submit' type='submit'
              value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
