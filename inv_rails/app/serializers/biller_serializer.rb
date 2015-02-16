class BillerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :selected
end
