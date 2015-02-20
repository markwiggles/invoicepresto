class BankDetailSerializer < ActiveModel::Serializer
  attributes :id, :name, :account_number, :selected
end
