get '/' do
  erb :index
end

post '/create_players' do
  # Game has_many :users, :through => Player
  # Game has_many :players
  # User has_many :games, :through => Player
  # User has_many :players
  # Player belongs_to :game, :user

  # hmt -- option 1
  # @game = Game.create
  # @game.users << User.find_or_create_by_name(params[:name1])
  # @game.users << User.find_or_create_by_name(params[:name2])

  # hmt -- option 2
  # @game = Game.create
  # user1 = User.find_or_create_by_name(params[:name1])
  # user2 = User.find_or_create_by_name(params[:name2])
  # @game.players.create(:user => user1)
  # @game.players.create(:user => user2)

  # hmt -- option 3
  @game = Game.create
  @user1 = User.find_or_create_by_name(params[:name1])
  @user2 = User.find_or_create_by_name(params[:name2])
  @player1 = Player.create(:game_id => @game.id, :user_id => @user1.id)
  @player2 = Player.create(:game_id => @game.id, :user_id => @user2.id)

  erb :play_game
end

post '/save_game' do
  if request.xhr?
    content_type :json
    puts params
    game = Game.find(params[:game_id])
    game.winner = params[:winner]
    game.save

    puts "Winner: #{game.winner}"
  end
end
