class ExperiencesController < ApplicationController

    def index
        exp = Experience.all
        respond_to do |format|
            format.json{ render json: exp}
        end
    end

    def new
    end

    def create
        exp = Experience.create(experience_params)
        if exp.save?
            render json: exp
        else
            render json: exp.errors
        end
    end

    def update
    end

    def delete
    end

    private

    def experience_params
        params.require(:experience).permit(:experience_name, :experience_type,:experience_sub_type,:experience_description,:address,:website,:phone_number,:hours)
    end

end
