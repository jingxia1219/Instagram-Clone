class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :password_digest,uniqueness: true
  validates :password, length:{minimum:6, allow_nil:true}
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :posts
  has_many :comments
  has_many :followings

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    return user if user.is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  has_one_attached :photo

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
