class AddCodeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :rsvp_code, :string
  end
end
