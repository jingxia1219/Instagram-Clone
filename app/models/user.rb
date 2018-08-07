class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true, uniqueness:true
  validates :password, :length:{minimum:6, allow_nil:true}


end
