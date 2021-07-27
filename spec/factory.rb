FactoryGirl.define do
  factory :property, do
    name "Test"
  end

  factory :photo, do
    sequence(:property_id) { |n| "#{n}" }
    url_path "path/to/image.jpg"
  end
end