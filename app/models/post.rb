class Post < ApplicationRecord
  has_one_attached :image
  validate :image_presence
  
  private
  def image_presence
    errors.add(:image, "Can't be blank!") unless image.attached?
  end
end
