require 'faker'

50.times do
  Property.create(
    name: Faker::Address.street_address,
  )
end

51.times do |n|
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/inside-#{rand(1..4)}.jpeg"
  )
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/inside-#{rand(1..4)}.jpeg"
  )
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/cover-#{rand(1..3)}.jpeg"
  )
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/inside-#{rand(1..4)}.jpeg"
  )
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/inside-#{rand(1..4)}.jpeg"
  )
end



