class AddGamesTable < ActiveRecord::Migration
  def change
      create_table :games do |f|
      f.boolean :result
      f.integer :user_id
      f.timestamps
    end
end

end
