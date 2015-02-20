class InvoiceNumberSerializer < ActiveModel::Serializer
  attributes :id, :nextnum_int, :nextnum_str, :selected
end
