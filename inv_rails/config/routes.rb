Rails.application.routes.draw do




  namespace :api do

    resources :billers
    resources :debtors
    resources :items
    resources :taxes
    resources :freights
    resources :bank_details
    resources :invoice_numbers
    
  end


end
