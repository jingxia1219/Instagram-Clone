class ChangeColumnType < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :user_id
    remove_column :follows, :followee_id
    add_column :follows, :user_id, :integer
    add_column :follows, :followee_id, :integer
  end


end
