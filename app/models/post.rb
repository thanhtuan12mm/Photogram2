class Post < ApplicationRecord
  acts_as_votable
  belongs_to :user
  has_one_attached :image
  validate :image_presence
  validates :caption, length: { maximum: 300 }
  validates :user_id, presence: true
  has_many :comments, dependent: :destroy
  has_many :notifications, dependent: :destroy
  scope :of_followed_users, -> (following_users) { where user_id: following_users }
  
  private
  def image_presence
    errors.add(:image, "Can't be blank!") unless image.attached?
  end
end
