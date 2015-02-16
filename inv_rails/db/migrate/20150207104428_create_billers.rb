class CreateBillers < ActiveRecord::Migration
  def change
    create_table :billers do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.boolean :selected, default: false
      t.timestamps null: false
    end
  end
end
