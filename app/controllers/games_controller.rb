class GamesController < ApplicationController
  layout "application"
  def index
    @countdown = { seconds: 60 }
  end
end
