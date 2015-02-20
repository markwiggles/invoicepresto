class CreateTaxes < ActiveRecord::Migration
  def change
    create_table :taxes do |t|
      t.string :name
      t.string :description
      t.float :percentage
      t.boolean :selected, default: false
      t.timestamps null: false
    end
  end
end
