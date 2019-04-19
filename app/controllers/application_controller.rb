class ApplicationController < ActionController::Base
    protect_from_forgery prepend: true

    def after_sign_in_path_for(resource)
        protected_path
    end

    def after_sign_out_path(resource)
        new_user_session_path
    end

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end

end
