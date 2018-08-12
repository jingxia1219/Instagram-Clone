class ChangeimgUrltoimgUrl < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :imgUrl
    add_column :posts, :img_url, :string
  end
end
