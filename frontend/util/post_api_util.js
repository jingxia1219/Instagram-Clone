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
