json.array! @posts do |post|
  json.extract! post, :id, :description, :photoUrl, :created_at
  # json.photoUrl url_for(post.photo)
end
