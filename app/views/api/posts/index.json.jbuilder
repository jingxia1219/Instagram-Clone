@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :description, :created_at, :author_id
    json.comment_ids post.comments.map { |comment| comment.id }
    json.photoUrl url_for(post.photo)
  end
end
