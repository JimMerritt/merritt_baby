Rails.application.routes.draw do
  resources :voters
  root 'welcome#index'
  get '/welcome/questions' 


end