import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, fetchUserPosts } from '../../actions/user_actions';
import React from 'react-redux';
import UserShow from './user_show';
import { logout } from  '../../actions/session_actions';

const mapStateToProps = ({entities, session}) => ({
  currentUserId: session.id,
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  logout: () => dispatch(logout()),
  fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
