json.extract! post, :id, :author_id, :created_at, :description
json.photoUrl url_for(post.photo)
