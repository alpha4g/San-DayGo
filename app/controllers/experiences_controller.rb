class ExperiencesController < ActionController::API

    def index
        @exp = Experience.all.order("created_at DESC")
        render json: @exp
    end

    def create
        @exp = Experience.create(experience_params)
        if exp.save
            render json: @exp
        else
            render json: @exp.errors, status: :unprocessable_entity
        end
    end

    def edit
      @exp = Experience.find(params[:id])
    end

    def update
      @exp = Experience.find(params[:id])
        if @exp.update_attributes(experience_params)
          render json: @exp
        else
          render json: @exp.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @exp = Experience.destroy(params[:id])
        @exps = Experience.all

      render json: @exps
    end

    private

    def experience_params
        params.require(:experience).permit(:experience_name, :experience_type,:experience_sub_type,:experience_description,:address,:website,:phone_number,:hours)
    end

end
