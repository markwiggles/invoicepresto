class CreateInvoiceNumbers < ActiveRecord::Migration
  def change
    create_table :invoice_numbers do |t|
      t.integer :nextnum_int
      t.string :nextnum_str
      t.boolean :selected, default: false
      t.timestamps null: false
    end
  end
end
