@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :description, :created_at, :author_id
    json.photoUrl url_for(post.photo)
  end
end
