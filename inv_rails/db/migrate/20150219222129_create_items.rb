class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.float :price
      t.integer :taxcode
      t.boolean :selected, default: false
      t.timestamps null: false
    end
  end
end
