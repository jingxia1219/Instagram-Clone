import * as APIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = ({comment, post}) => ({
  type: RECEIVE_COMMENT,
  comment, post
});

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = postId => dispatch => (
  APIUtil.fetchComments(postId)
  .then( comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
  .then( comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
  APIUtil.deleteComment(comment)
  .then(res => dispatch(removeComment(comment.id)))
);
