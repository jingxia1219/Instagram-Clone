import { merge } from 'lodash';
import {RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from '../actions/posts/post_actions';

const postReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge( {}, action.posts);
    case RECEIVE_POST:
      return merge({}, state, {[action.post.id]: action.post});
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postReducer;
