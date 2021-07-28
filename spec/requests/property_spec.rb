require 'rails_helper'

RSpec.describe 'Properties API', type: :request do
  describe 'GET /properties' do
    before { get '/properties', params: {} }

    it 'expect returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end