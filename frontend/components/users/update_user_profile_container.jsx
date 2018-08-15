import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import UpdateUserProfile from './update_user_profile';
import React from 'react';
const mapStateToProps = ({session, entities}) => ({
  userId: session.id,
  currentUser: entities.users[session.id],
  formType: 'UpdateUserProfile'
});

const mapDispatchToProps = dispatch => ({
  otherForm: (
    <button onClick={() => dispatch(openModal('UpdateUserProfile'))}>
      Edit Profile
    </button>
  ),
  closeModal: ()=> dispatch(closeModal())
});


export default connect(mapStateToProps,
mapDispatchToProps)(UpdateUserProfile);
