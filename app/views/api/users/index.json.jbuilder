@users.each do |user|
  json.set! user.id do
    json.partial! "api/users/user", user: user
    # json.extract! user, :id, :email, :username, :bio
    # json.avatarUrl url_for(user.profile_picture)
  end
end
