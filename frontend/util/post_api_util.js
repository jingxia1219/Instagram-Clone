export const fetchPosts = () => (
  $.ajax({
    method: "get",
    url: "/api/posts"
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
    url: "/api/post",
    data: { post }
  })
);

export const deletePost = (id) => (
  $.ajax({
    method: 'destroy',
    url: `/api/posts/${id}`
  })
);
