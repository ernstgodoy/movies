Rails.application.routes.draw do
  resources :movies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'main#index', constraints: ->(request){ request.format.html? }
  root to: 'main#index'
end
