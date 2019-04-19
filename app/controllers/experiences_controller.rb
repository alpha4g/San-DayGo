class ExperiencesController < ActionController::API

    def index
        exp = Experience.all
        render json: exp
        
    end

    def new
    end

    def create
        exp = Experience.create(experience_params)
        if exp.save
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
