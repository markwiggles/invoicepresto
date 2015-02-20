class TaxSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :percentage, :selected
end
