import { RECEIVE_COMMENT,RECEIVE_COMMENTS, REMOVE_COMMENT } from
'../actions/comment_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import {RECEIVE_POSTS, RECEIVE_POST} from '../actions/posts/post_actions';
import {merge} from 'lodash';

const commentReducer = ( state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comments.id]:action.comments});
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentsId];
      return newState;

    case RECEIVE_POSTS:
      return merge({},state, action.comments);
    case RECEIVE_POST:
      return merge({},state, action.comments);

    case RECEIVE_USER:
      return merge({}, action.comments);

    default:
      return state;
  }
};

export default commentReducer;
