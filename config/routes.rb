Rails.application.routes.draw do
  devise_for :users
  resources :guests
  root 'welcome#index'
  get '/welcome/questions' 
  get '/welcome/partyinfo'
  get '/welcome/registry'


end