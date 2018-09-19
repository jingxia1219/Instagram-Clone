export const selectPostByUser = (entities, userId) => {

  // console.log(Object.values(entities.posts).filter( post => (post.author_id === userId)) );
    let values = Object.values(entities.posts);
    values = values.filter( post => (post.author_id === userId));
    values = values.sort( (a,b) => new Date(b.createAt) - new Date(a.createAt));
    return values;
};

export const sortPosts = posts => {
  let values = Object.values(posts);
  values = values.sort((a,b) => new Date(b.createdAt) - new Date(a.createAt));
  return values;
};

export const sortComments = (comments, postId) => {
  let commentsByPost = Object.values(comments).filter( comment => comment.post_id === postId);
  commentsByPost = commentsByPost.sort( (a,b) => new Date(a.createAt) - new Date(b.createdAt));
  return commentsByPost;
};

export const filterFollows = (follow, userId) => {to 
  let values = Object.values(follow);
  return values.filter( follow => follow.userId === userId);
};
