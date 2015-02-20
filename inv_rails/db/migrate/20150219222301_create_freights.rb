class CreateFreights < ActiveRecord::Migration
  def change
    create_table :freights do |t|
      t.string :name
      t.string :description
      t.float :price
      t.boolean :selected, default: false
      t.timestamps null: false
    end
  end
end
