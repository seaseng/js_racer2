class CreateTables < ActiveRecord::Migration

  def change
    create_table :users do |t|
      t.string :name
    end

    create_table :games do |t|
      t.integer     :time
      t.string      :winner
    end

    create_table :players do |t|
      t.references  :user
      t.references  :game
    end
  end
end
