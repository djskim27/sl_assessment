Rails.application.routes.draw do
	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	namespace :api do
		get :people, to: 'people#index'
	end

  root 'homepage#index'
end
