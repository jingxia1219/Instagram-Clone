json.extract! comment, :id, :user_id, :post_id, :body,
:created_at
json.username comment.user.username
