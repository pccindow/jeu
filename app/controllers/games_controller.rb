class GamesController < ApplicationController
  layout "application"
  def index
    @countdown = { seconds: 30 }
  end
end
