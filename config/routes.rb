War::Application.routes.draw do
root :to => 'users#index'

resources :users, :only =>[:index,:new,:create]
get "/games" => "games#index", :as => 'games'

post "/record" => 'games#record', :as => 'record'

get '/login' => 'sessions#new'
post '/login' => 'sessions#create'
delete '/login' => 'sessions#destroy'




end
