import { RECEIVE_FOLLOW,
  REMOVE_FOLLOW,
  RECEIVE_FOLLOWS } from '../actions/follow_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const followReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_USER:
      return merge({}, action.users);
    case RECEIVE_FOLLOW:
      return merge( {}, state, {[action.payload.follow.id]: action.payload.follow});
    case RECEIVE_FOLLOWS:
      return merge( {}, action.follows);
    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      delete newState[action.payload.follow.id];
      return newState;
    default:
      return state;
  }
};

export default followReducer;
