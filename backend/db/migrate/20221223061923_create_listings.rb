class CreateListings < ActiveRecord::Migration[7.0]
  def change
    # create_table :users do |t|
    #   t.string :username, null: false
    #   t.string :email, null: false
    #   t.string :password_digest, null: false
    #   t.string :session_token, null: false
    #   t.string :location

    #   t.timestamps
    # end
    


    # create_table :shops do |t|
    #   t.string :shop_name
    #   t.references :user, column: :owner, foreign_key: true
    #   t.string :location

    #   t.timestamps
    # end



    # add_index :users, :username, unique: true
    # add_index :users, :email, unique: true
    # add_index :users, :session_token, unique: true


    # add_index :listings, :lister_id, unique: true
    # add_index :listings, :email, unique: true
    # add_index :listings, :session_token, unique: true

  end
end
