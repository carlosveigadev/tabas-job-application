class CreatePhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :photos do |t|
      t.string :img_path, null: false
      t.bigint "property_id", null: false
      
      t.timestamps
    end
  end
end
