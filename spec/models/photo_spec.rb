require 'rails_helper'

RSpec.describe Photo, type: :model do
  #Association tests
  it { should belong_to(:property) }
end
