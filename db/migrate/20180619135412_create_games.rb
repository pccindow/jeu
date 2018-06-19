class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :liquidation_account
      t.string :find_word, array: true, default: []
      t.string :word_string
      t.integer :score, array: true, default: []

      t.timestamps
    end
  end
end
