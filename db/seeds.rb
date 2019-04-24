# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
theArray = ['Adrenaline', 'Foodie', 'Outdoors']
theArray.each do |type|
  ['Daytime Activities', 'Nighttime Activities', 'Restaraunt $'].each do |subtype|
    Experience.where(experience_type: type, experience_sub_type: subtype).first_or_create do |experience|
      experience.experience_name = [type,subtype].join(' ')
    end
  end
end
