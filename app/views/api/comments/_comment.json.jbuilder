json.extract! comment, :id, :user_id, :post_id, :body,
:create_at
json.username comment.user.username
