class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :experience_name
      t.string :experience_type
      t.string :experience_sub_type
      t.string :experience_description
      t.string :address
      t.string :website
      t.string :phone_number
      t.string :hours

      t.timestamps
    end
  end
end
