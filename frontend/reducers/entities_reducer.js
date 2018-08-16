import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postReducer from './post_reducer';
import followReducer from './follow_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postReducer,
  follows: followReducer
});

export default entitiesReducer;
