import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import React from 'react-redux';
import SessionForm from './session_form';
const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    navLink: "login"
};
};

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: ()=> dispatch(clearErrors()),
  demoLogin: (demoUser) => dispatch(login(demoUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
