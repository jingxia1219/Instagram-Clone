export const fetchUsers = () => (
  $.ajax({
    method: 'get',
    url: '/api/users',
  })
);

export const updateUser = ( payload) => {
  debugger;
  return $.ajax({
    method: 'patch',
    url: `/api/users/${payload.userId}`,
    data: payload.user,
    contentType: false,
    processData: false,
  });
};

export const fetchUser = (user) => (
  $.ajax({
    method: 'get',
    url: `/api/users/${user.id}`
  })
);
