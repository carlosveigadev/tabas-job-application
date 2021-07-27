class Property < ApplicationRecord
  has_many :photos, dependent: :destroy

  validates :name, presence: true

  def cover_photo
    photo = Photo.where(property_id: id).third
  end
end
