import * as FollowApiUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow
});

const receiveFollows = ( follows ) => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const fetchFollows = currentUser => dispatch => (
  FollowApiUtil.fetchFollows(currentUser).
  then( follows => dispatch(receiveFollows(follows)))
);

export const createFollow = followeeId => dispatch => (
  FollowApiUtil.createFollow(followeeId).
  then( follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = follow => dispatch =>(
  FollowApiUtil.deleteFollow(follow).
  then( (follow )=> removeFollow(follow))
);
