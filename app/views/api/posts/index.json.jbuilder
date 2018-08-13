json.array! @posts do |post|
  json.extract! post, :id, :description, :photoUrl, :created_at, :author_id
  # json.photoUrl url_for(post.photo)
end
