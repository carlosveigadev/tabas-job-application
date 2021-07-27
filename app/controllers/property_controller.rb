class PropertyController < ApplicationController
  before_action :current_property, only: [:show]

  def index
    properties = Property.all
    json_response(properties)
  end

  def show
    property = Property.find(@current_property)
    cover_photo = Property.cover_photo(@current_property)
    result = [property, cover_photo]
    json_response(result, cover_photo)
  end

  private

  def current_property
    @current_property ||= Property.find(params[:id])
  end
end
