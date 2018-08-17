import * as FollowApiUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const removeFollow = (payload) => ({
  type: REMOVE_FOLLOW,
  payload
});

const receiveFollows = ( follows ) => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const receiveFollow = (payload) => ({
  type: RECEIVE_FOLLOW,
  payload
});

export const fetchFollows = currentUser => dispatch => (
  FollowApiUtil.fetchFollows(currentUser).
  then( follows => dispatch(receiveFollows(follows)))
);

export const createFollow = followeeId => dispatch => (
  FollowApiUtil.createFollow(followeeId).
  then( payload => dispatch(receiveFollow(payload)))
);

export const deleteFollow = userId => dispatch =>(
  FollowApiUtil.deleteFollow(userId).
  then( (payload )=> removeFollow(payload))
);
