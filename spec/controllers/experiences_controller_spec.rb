require 'spec-helper'

RSpec.describe "#create" do
    it "takes strong pramas and returns and experience object" do
        @exp.should be_an_instance_of Experience
    end

RSpec.describe "#index" do
    it "should render all experiences on the admin portal" do
        @exp.to render_template(:json)
    end

RSpec.describe ExperiencesController do
    it "should match Itinerary match params to render" do
        get :index
        expect(response.body).to match /<p>.*match/experiences
    end

RSpec.describe "routes for rails", :type => :routing do
    it "should root us to our home page"
    expect(get("/admin")).
        to route_to("pages#admin")
    end

RSpec.describe "routes for login", :type => :routing do
    it "should root to itinerary page from tourist home page" do
        expect(get("/itinerary/:experience_type")).
            to route_to(:controller => "index", :action -> "")
    end
end
