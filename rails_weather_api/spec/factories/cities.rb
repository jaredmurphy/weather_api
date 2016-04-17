require 'faker'


FactoryGirl.define do 
  factory :city do |city|
    city.name { Faker::Address.city }
    city.humidity { Faker::Number.decimal(2) }
    city.temp { Faker::Number.decimal(2) }    
    city.description { Faker::Commerce.product_name }
    city.wind { Faker::Number.decimal(2) } 
    city.id { Faker::Address.zip }
  end
end
