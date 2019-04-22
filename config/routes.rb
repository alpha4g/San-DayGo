Rails.application.routes.draw do

resources :experiences, constraints: ->(request){!request.format.html?}

  devise_for :users

  get 'admin', to: 'pages#admin', as: :protected
  get "*path", to: 'pages#admin', constraints: ->(request){request.format.html?}



    root to: 'pages#tourist'

end
