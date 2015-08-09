Rails.application.routes.draw do
  resources :guests
  root 'welcome#index'
  get '/welcome/questions' 
  get '/welcome/partyinfo'
  get '/welcome/registry'


end