Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  get '/me', to: 'users#me'

  resources :users, only: [:create, :show, :index]
  resources :details, only: [:show, :index, :create, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
