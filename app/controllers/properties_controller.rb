class PropertiesController < ApplicationController
  before_action :current_property, only: [:show]

  def index
    properties = Property.page((params[:page] ? params[:page].to_i : 1)).per(10)        
    result = { objects: properties, meta: pagination_meta(properties) }
    json_response(result)
  end

  def show
    property = Property.find(@current_property.id)
    cover_photo = Property.cover_photo(@current_property.id)
    property_photo = Property.property_photos(@current_property.id)
    result = {
      property: property,
      cover_photo: cover_photo,
      property_photos: property_photo
    }
    json_response(result)
  end

  private

  def current_property
    @current_property ||= Property.find(params[:id])
  end

end
