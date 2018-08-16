Rails.application.routes.draw do
  namespace :api do
    get 'follows/index'
    get 'follows/create'
    get 'follows/destroy'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
namespace :api, defaults: {format: :json} do
  resources :posts, only:[:create, :destroy, :index, :show]
  resources :users, only:[:show, :index, :update] do
    resources :comments, only:[:create, :update, :destroy]
    resources :follows, only:[:create, :index, :destroy]
    end
  resource :session, only:[:create, :destroy, :show]
 end
end
