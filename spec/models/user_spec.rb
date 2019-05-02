require 'rails_helper'

Rspec.describe User, type: :model do
    it "has a name" do
        expect{User.new}.to_not raise_error
    end

RSpec.describe User, type: :model do
  it "should validate name" do
    user = User.create
    expect(user.errors[:name]).to_not be_empty
  end
end

RSpec.describe User, type: :model do
  it "should validate character length for sign up" do
    user = User.create(email: "thisissample@gmail.com", password: "password")
    expect(user).to be_valid
  end
end

RSpec.describe User, type: :model do
  it "should validate password length for sign up" do
    user = User.create(email: "moresample@gmail.com", password: "morepassword")
    expect(user).to be_success
  end
end

RSpec.describe User, type: :model do
  it "should validate password" do
    user = User.create
    expect(user.errors[:password]).to_not be_empty
  end
end

end
