require 'rails_helper'

RSpec.describe 'Properties API', type: :request do
  let(:property) { create(:property) }

  10.times do |i|
    let(:photo) { create(:photo, property_id: i) }
  end

  describe 'GET /properties' do
    before { get '/properties', params: {} }

    it 'expect returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /properties/id' do
    before { get '/properties/1', params: {} }

    it 'expect returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end