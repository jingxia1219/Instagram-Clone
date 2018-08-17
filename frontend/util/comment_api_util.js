export const createComment = comment => (
  $.ajax({
    method: "post",
    url: `/api/posts/${comment.post_id}/comments`,
    data: {comment}
  })
);

export const fetchComments = (postId) => (
  $.ajax({
    url: `/api/posts/${postId}/comments`,
    method:'get',
    data: {postId}
  })
);

export const deleteComment = comment => (
  $.ajax({
    method: 'delete',
    url: `/api/posts/${comment.post_id}/comments/${comment.id}`
  })
);
