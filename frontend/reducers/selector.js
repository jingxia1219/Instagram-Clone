export const selectPostByUser = (entities, userId) => {

  console.log(Object.values(entities.posts).filter( post => (post.author_id === userId)) );
  return (
    Object.values(entities.posts).filter( post => (post.author_id === userId))
  );
};
