import * as PostApiUtil from '../../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = () => dispatch => (
  PostApiUtil.fetchPosts().then( posts => dispatch(receivePosts(posts)))
);

export const createPost = (post) => (dispatch) => (
  PostApiUtil.createPost(post).then( post => dispatch(receivePost(post)))
);


export const fetchPost = (id) => dispatch => (
  PostApiUtil.fetchPost(id).then( post=> dispatch(receivePost(post)))
);

export const deletePost = (id) => dispatch => (
  PostApiUtil.deletePost(id).then( () => dispatch(removePost(id)))
);
