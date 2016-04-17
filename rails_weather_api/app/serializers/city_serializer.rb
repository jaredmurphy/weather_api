class CitySerializer < ActiveModel::Serializer
    attributes :id, :name, :humidity, :temp, :description, :wind
end
