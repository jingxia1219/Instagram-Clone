class AddphotoUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :photoUrl, :string
  end
end
