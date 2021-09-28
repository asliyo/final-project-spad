class SessionsController < ApplicationController
    def index
        @details = Detail.all
        if @details
          render json: {
            details: @details
          }
        else
          render json: {
            status: 500,
            errors: ['no users found']
          }
        end
    end
    def show
        @detail = Detail.find(params[:id]) #current_user id
       if @detail
          render json: {
            detail: @detail
          }
        else
          render json: {
            status: 500,
            errors: ['user not found']
          }
        end
    end

    def create
        @detail = Detail.new(user_params)
        if @Detail.save
            render json: {
            status: :created,
            detail: @detail
            }
        else 
            render json: {
            status: 500,
            errors: @Detail.errors.full_messages
            }
        end
    end

    private
      
    def detail_params
    params.require(:detail).permit(:name, :user_id, :user_role)
    end
end