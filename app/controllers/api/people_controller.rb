class Api::PeopleController < ApplicationController

  def index
    people = SalesloftService.fetch_people
    render json: people
  end

  def character_freq_count
    calc = SalesloftService.find_uniq_char_freq
    render json: calc

  end

  def possible_duplicates
    calc = SalesloftService.find_possible_dup
    render json: calc
  end

end