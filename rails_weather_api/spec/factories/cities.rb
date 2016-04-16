require 'faker'

FactoryGirl.define do 
  factory :city do |city|
    city.name "London"
    city.humidity 28
    city.temp 292.42
    city.description "clear sky"
    city.wind 3.1
  end
end
