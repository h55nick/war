class AddUsersTabl < ActiveRecord::Migration
  def change
      create_table :users do |f|
      f.string :name
      f.string :image
      f.string :password_digest
      f.timestamps
    end
end
end
