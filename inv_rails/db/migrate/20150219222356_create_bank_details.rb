class CreateBankDetails < ActiveRecord::Migration
  def change
    create_table :bank_details do |t|
      t.string :name
      t.string :account_number
      t.boolean :selected, default: false
      t.timestamps null: false
    end
  end
end
