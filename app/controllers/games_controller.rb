class GamesController < ApplicationController
  layout "application"
  def index
    @hello_world_props = { name: "Stranger" }
  end
end
