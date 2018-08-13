export const fetchPosts = () => (
  $.ajax({
    method: "get",
    url: "/api/posts",
  })
);

export const fetchPost = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/posts/${id}`
  })
);
export const createPost = post => (
  $.ajax({
    method: 'post',
    url: "/api/posts",
    data: { post }
  })
);

export const deletePost = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/posts/${id}`
  })
);
