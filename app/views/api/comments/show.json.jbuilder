json.comment do
  json.partial! 'api/comments/comment', comment: @comment
end

json.post do
  json.partial! 'api/posts/post', post: @comment.post
end
json.user do
  json.set! @comment.user.id do
    json.extract! @comment.user, :id, :username
    end 
end
