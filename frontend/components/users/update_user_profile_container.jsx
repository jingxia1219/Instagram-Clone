import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import UpdateUserProfile from './update_user_profile';
import { updateUser } from '../../actions/user_actions';
import React from 'react';
const mapStateToProps = ({session, entities}) => ({
  bio: entities.users[session.id].bio,
  userId: session.id,
  currentUser: entities.users[session.id],
  formType: 'UpdateUserProfile'
});

const mapDispatchToProps = dispatch => {
  return {
  updateUser: (user) => dispatch(updateUser(user)),
  closeModal: ()=> dispatch(closeModal())
};
};


export default connect(mapStateToProps,
mapDispatchToProps)(UpdateUserProfile);
