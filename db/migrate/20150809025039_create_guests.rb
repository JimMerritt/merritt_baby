class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :name
      t.string :message
      t.boolean :boy
      t.boolean :girl

      t.timestamps null: false
    end
  end
end
