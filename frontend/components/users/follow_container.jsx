import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import {
  fetchFollows,
  createFollow,
  deleteFollow } from '../../actions/follow_actions';
import Follow from './follow';

const mapStateToProps = ({entities, session}) => ({
  followees: Object.values(entities.follows).
  filter( follow => follow.user_id === session.id ).map( follow => entities.users[follow.followee_id]),
  users: entities.users,
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  fetchFollows: (currentUser) => dispatch(fetchFollows(currentUser)),
  createFollow: (followeeId) => dispatch(createFollow(followeeId)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow))
});

export default connect(mapStateToProps,
mapDispatchToProps)(Follow);
