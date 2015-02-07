Rails.application.routes.draw do
  resources :billers, only: :index
end
