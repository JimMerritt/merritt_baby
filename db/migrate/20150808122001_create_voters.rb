class CreateVoters < ActiveRecord::Migration
  def change
    create_table :voters do |t|
      t.string :name
      t.string :message
      t.string :vote

      t.timestamps null: false
    end
  end
end
