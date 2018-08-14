@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :created_at, :bio, :photo
    # json.photoUrl url_for(post.photo)
  end
end
