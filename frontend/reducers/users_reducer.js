import merge from 'lodash/merge';
import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = ( state={}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    // debugger;
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_USERS:
    console.log(action.users);
      return merge({}, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;
