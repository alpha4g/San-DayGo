json.array! @exp do |exp|
  json.experience_name exp.experience_name
  json.experience_sub_type exp.experience_sub_type
  json.experience_type exp.experience_type
  json.experience_description exp.experience_description
  json.hours exp.hours
  json.phone_number exp.phone_number
  json.address exp.address
  json.website exp.website
end
