class User < ApplicationRecord

validates :name, presence: true, length: { maximum: 25 }
validates :password, presence: true, length: { minimum: 6}
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
