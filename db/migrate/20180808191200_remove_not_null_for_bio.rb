class RemoveNotNullForBio < ActiveRecord::Migration[5.2]
  def up
    change_column_null :users, :bio, true
  end

  def down
    change_column_null :users, :bio, false 
  end
end
