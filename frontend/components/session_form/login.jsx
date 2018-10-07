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

  renderErrors(){
    // debugger;
    return (
    <ul>
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
               required
               ></input>
        </div>
      );
    }
  }

  demo(e){
    e.preventDefault();
    this.props.demoLogin({username:"Harry_potter", password:"123456"});
    }
  render(){
    const signupEmail = this.signup();
    return (
      <div>
      <div className='intro-signup'>
        <img className='instapic-text' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38749082_1769735009788372_243286579940950016_n.jpg?_nc_cat=0&oh=6523cec7952760d9608eb243a59981c1&oe=5C121671' alt='insta_pic'/>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <br/>
          <h2 className="header-name">Sign up to see photos and videos  <br/>from your friends.</h2>
          <button className='demo-user-intro' onClick={this.demo.bind(this)}>Demo Login</button>
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                required
                placeholder='Phone number, username, or email'
                />
            <br />
              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
                placeholder="Password"
                required
                />
            {signupEmail}
            <br/>
            <input className='session-submit' type='submit'
              value={this.props.formType} />
            <br/>
            <span className='copy-right'>By signing up, you agree to our
            <p className='copy-right-bold'>Terms, Data Policy and Cookies <br/> Policy.</p>
          </span>
          </div>
        </form>
      </div>

      <span className='seperate-box'>Have an account?<br/><Link className="signin-link1"  to={this.props.navLink}>{this.props.navLink}</Link></span>
      </div>
    );
  }
}

export default withRouter(SessionForm);
