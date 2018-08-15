import { fetchPosts } from './posts/post_actions';

export const uPDATE_FILTER = 'uPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: uPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value ) => (dispatch, getState ) => {
  dispatch(changeFilter(filter, value));
  return fetchPosts();
};
