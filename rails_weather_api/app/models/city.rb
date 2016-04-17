class City < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true
  validates :wind, presence: true
  validates :humidity, presence: true
  validates :temp, presence: true
  validates :id, presence: true
end
