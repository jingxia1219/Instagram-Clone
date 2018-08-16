import { RECEIVE_FOLLOW,
  REMOVE_FOLLOW,
  RECEIVE_FOLLOWS } from '../actions/follow_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const followReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.followee || {};
    case RECEIVE_FOLLOW:
      return merge( {}, state, {[action.follow.id]: action.follow});
    case RECEIVE_FOLLOWS:
      return merge( {}, action.follows);
    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      delete newState[action.follow];
      return newState;
    default:
      return state;
  }
};

export default followReducer;
