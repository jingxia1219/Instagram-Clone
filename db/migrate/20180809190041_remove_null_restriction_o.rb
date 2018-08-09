class RemoveNullRestrictionO < ActiveRecord::Migration[5.2]
  def up
    change_column_null :posts, :description,  null: true
  end

  def down
    change_column_null :posts, :description, null: false
  end
end
