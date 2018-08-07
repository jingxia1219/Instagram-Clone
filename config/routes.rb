Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
namespace :api, defaults: {format: :json} do
  resources :users do
    resources :posts, only[:index]
  end
  resource :session, only:[:create, :destroy, :show]
  resources :posts, only:[:create, :destroy, :index, :show] do
    resources :comments, only:[:create, :update, :destroy]
  end 
end
