class FreightSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :selected
end
