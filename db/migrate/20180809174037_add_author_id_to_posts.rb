class AddAuthorIdToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :author_id, :string, null: false
  end
end
