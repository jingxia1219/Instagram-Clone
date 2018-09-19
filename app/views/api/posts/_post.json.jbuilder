json.extract! post, :id, :author_id, :created_at, :description
json.comment_ids post.comments.map { |comment| comment.id }
json.photoUrl url_for(post.photo)
