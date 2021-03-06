Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
namespace :api, defaults: {format: :json} do
  resources :posts, only:[:create, :destroy, :index, :show] do
    resources :comments, only:[:index, :show, :create, :update, :destroy]
  end
  resources :users, only:[:show, :index, :update, :create] do
    resources :follows, only:[:create, :index, :destroy]
    end
  resource :session, only:[:create, :destroy, :show]
 end
end
