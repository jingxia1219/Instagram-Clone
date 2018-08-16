export const fetchUserPosts = (userId) => (
  $.ajax({
    method: 'get',
    url: `/api/users/${userId}/posts`
  })
);

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
    dataType: "json",
    contentType: false,
    processData: false,
    data: post,
  })
);

export const deletePost = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/posts/${id}`
  })
);
