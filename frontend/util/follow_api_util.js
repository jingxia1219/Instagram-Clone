export const createFollow = (followeeId) => (
  $.ajax({
    method: 'post',
    url: `/api/users/${followeeId}/follows`,
    data: { followeeId }
  })
);

export const deleteFollow = (follow) => (
  $.ajax({
    method: 'delete',
    url:  `/api/users/${follow.user.id}/follows/${follow.id}`
  })
);

export const fetchFollows = (currentUser) => (
  $.ajax({
    method: 'get',
    url: `/api/users/${currentUser.id}/follows`
  })
);
