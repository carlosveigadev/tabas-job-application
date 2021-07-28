require 'faker'

50.times do
  Property.create(
    name: Faker::Address.street_address,
  )
end

51.times do |n|
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/inside-#{rand(1..4)}.png"
  )
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/inside-#{rand(1..4)}.png"
  )
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/cover-#{rand(1..3)}.png"
  )
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/inside-#{rand(1..4)}.png"
  )
  Photo.create(
    property_id: "#{n}",
    path_url: "assets/images/inside-#{rand(1..4)}.png"
  )
end



