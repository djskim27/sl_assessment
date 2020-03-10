Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	namespace :api do
		get :people, to: 'people#index'
    get :character_freq_count, to: 'people#character_freq_count'
    get :possible_duplicates, to: 'people#possible_duplicates'
	end

  root 'homepage#index'
end
