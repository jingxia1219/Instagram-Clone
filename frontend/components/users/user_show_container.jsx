import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/posts/post_actions';
import React from 'react-redux';
import UserShow from './user_show';
import { logout } from  '../../actions/session_actions';
import {selectPostByUser} from '../../reducers/selector';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({entities, session}, ownProps) => ({
  users: entities.users,
  currentUser: entities.users[session.id],
  postsByUser: selectPostByUser(entities, ownProps.match.params.userId ),
  userId: ownProps.match.params.userId
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  logout: () => dispatch(logout()),
  fetchPosts: () => dispatch(fetchPosts()),
  openModalPost: () => dispatch(openModal("createPost")),
  closeModal: ()=> dispatch(closeModal()),
  openModalProfile: () => dispatch(openModal("UpdateProfile"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
