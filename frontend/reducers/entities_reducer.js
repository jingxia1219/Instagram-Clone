import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postReducer from './post_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postReducer
});

export default entitiesReducer;
