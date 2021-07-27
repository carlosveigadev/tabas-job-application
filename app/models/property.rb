class Property < ApplicationRecord
  has_many :photos, dependent: :destroy

  validates :name, presence: true

  scope :cover_photo, -> (property_id){ Photo.where(property_id: property_id).third }
end
