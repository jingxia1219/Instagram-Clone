import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = ({user, posts, comments}) => ({
  type: RECEIVE_USER,
  user,
  posts,
  comments,
  followers: user.followers,
  followees: user.followees
});

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers().then( users => dispatch(receiveUsers(users)))
);

export const fetchUser = (id) => dispatch => (
  UserApiUtil.fetchUser(id).then( user=> dispatch(receiveUser(user)))
);

export const updateUser = (payload) => dispatch => (
  UserApiUtil.updateUser(payload).then( user => dispatch(receiveUser(user)))
);
