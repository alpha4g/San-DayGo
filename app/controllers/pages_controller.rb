class PagesController < ApplicationController
    before_action :authenticate_user!, only: :admin

    def tourist
    end
    
    def admin
    end

    def tourist
    end

end
