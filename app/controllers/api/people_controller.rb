class Api::PeopleController < ApplicationController

  def index
    people = SalesloftService.fetch_people
    render json: people
  end

  def character_frequency_count

  end

  def possible_duplicates

  end
end