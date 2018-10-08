export const fetchUsers = () => (
  $.ajax({
    method: 'get',
    url: '/api/users',
  })
);

export const updateUser = ( payload) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${payload.userId}`,
    data: payload.user,
    contentType: false,
    processData: false,
  });
};

export const fetchUser = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/users/${id}`,
  })
);
