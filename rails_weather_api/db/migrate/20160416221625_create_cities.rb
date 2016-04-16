class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.float :humidity
      t.float :temp
      t.string :description
      t.float :wind

      t.timestamps null: false
    end
  end
end
