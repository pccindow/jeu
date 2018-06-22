require 'net/http'
require 'json'
require 'ostruct'

class GamesController < ApplicationController
  layout "application"

  def index
    parse_api
    #@countdown = { seconds: 60 }
    @words = { words: @arrayOfWords }
  end

  private

  def parse_api
    url = "https://api.datamuse.com/words?ml=chicken&sp=*"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    array = JSON.parse(response, object_class: OpenStruct)
    @arrayOfWords = array.map{|elem| elem[:word]}
  end
end
