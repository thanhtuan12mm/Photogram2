class Post < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  validate :image_presence
  validates :caption, length: { maximum: 300 }
  validates :user_id, presence: true
  has_many :comments, dependent: :destroy
  
  private
  def image_presence
    errors.add(:image, "Can't be blank!") unless image.attached?
  end
end
