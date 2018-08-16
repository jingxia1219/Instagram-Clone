class Follow < ApplicationRecord
  validates :user_id, :followee_id, presence: true
  validates , :followee_id, uniqueness: { scope: :user_id }

  belongs_to :user

  belongs_to :followee,
  foreign_key: :followee_id,
  class_name: 'User'
  
end
