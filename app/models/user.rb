class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :password_digest,uniqueness: true
  validates :password, length:{minimum:6, allow_nil:true}
  attr_reader :password
  after_initialize :ensure_session_token, :ensure_profile_picture

  has_many :posts
  has_many :comments
  has_many :follows

  has_many :followers,
  through: :follows,
  source: :user

  has_many :followees,
  through: :follows,
  source: :followee


  has_one_attached :profile_picture

  def ensure_profile_picture
    unless self.profile_picture.attached?
      file = EzDownload.open("https://www.menon.no/wp-content/uploads/person-placeholder.jpg")
      self.profile_picture.attach(io: file, filename: 'default_profile_picture')
    end
  end

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


  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
