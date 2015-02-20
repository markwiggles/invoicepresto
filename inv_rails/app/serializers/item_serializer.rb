class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :taxcode, :selected
end
