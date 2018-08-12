Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
namespace :api, defaults: {format: :json} do
  resources :posts, only:[:create, :destroy, :index, :show] do
  resources :users, only:[:show] do
    resources :posts, only:[:index]
  end
  resources :users, only: [:create]
    resources :comments, only:[:create, :update, :destroy]
  end
  resource :session, only:[:create, :destroy, :show]
 end
end
