import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postReducer from './post_reducer';
import followReducer from './follow_reducer';
import commentReducer from './comment_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postReducer,
  follows: followReducer,
  comments: commentReducer
});

export default entitiesReducer;
