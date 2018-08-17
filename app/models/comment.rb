class Comment < ApplicationRecord
  validates :user_id, :post_id, :body, presence: true

  belongs_to :user
  belongs_to :post
end
