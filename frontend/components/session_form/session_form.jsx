import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  componentWillUnmount() {
    this.props.clearErrors();
  }

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      email: "",
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

demo(e) {
  e.preventDefault();
  this.props.demoLogin({username:"jingx", password:"123456"})
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
            <input className="login-input"
              type="text" onChange={this.update('email')}
              value={this.state.email}
              placeholder='Email'
              ></input>
        </div>
      );
    }
  }

  render(){
    const signupEmail = this.signup();
    return (
      <div>
      <div className='login-form-container'>
        <img className='instapic-text' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38749082_1769735009788372_243286579940950016_n.jpg?_nc_cat=0&oh=6523cec7952760d9608eb243a59981c1&oe=5C121671' alt='insta_pic'/>
        <form onSubmit={this.handleSubmit} className='login-form-box'>

          <br/>
          <h2 className="header-name">Welcome to InstaPic! <br/>to see photos and videos, <br/>
          Please {this.props.formType} or   </h2>
        <button className='demo-user' onClick={this.demo.bind(this)}>DEMO LOGIN</button>
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Phone number, username, or email"
                />
            <br />
              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
                placeholder='Password'
                />
            {signupEmail}
            <br/>
            <input className='session-submit' type='submit'
              value={this.props.formType} />
          </div>
        </form>
        <p className='or-dash'></p>
        <Link className="signin-link"  to={this.props.navLink}>{this.props.navLink}</Link>
      </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);
