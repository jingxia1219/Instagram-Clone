export const fetchUsers = () => (
  $.ajax({
    method: 'get',
    url: '/api/users',
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${user.id}`
  })
);

export const fetchUser = (user) => (
  $.ajax({
    method: 'get',
    url: `/api/users/${user.id}`
  })
);
