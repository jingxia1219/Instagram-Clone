@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :created_at, :bio
    # json.photoUrl url_for(post.photo)
  end
end
