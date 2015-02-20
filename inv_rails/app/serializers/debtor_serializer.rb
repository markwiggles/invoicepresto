class DebtorSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :selected
end
