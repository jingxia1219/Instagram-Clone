json.array! @posts do |post|
  json.extract! post, :id, :description
  json.photoUrl url_for(post.photo)
end 
