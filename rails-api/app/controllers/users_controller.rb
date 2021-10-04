class UsersController < ApplicationController
  def index
      @users = User.all

      if @users.present?
        render json: {
          status: 200,
          users: @users
        }
      else
        render json: {
          status: 422,
          errors: ['no users found']
        }
      end
  end

  def show
    # puts current_user.inspect
      @user = User.find(params[:id])

        if @user.present?
          render json: {
            user: @user,
            personnel: @user.personnel
        }
        else
          render json: {
            status: 401,
            errors: ['user not found']
          }
      end
  end
    
  def create
    @user = User.new(user_params)
    if @user.save
        login!
        render json: {
        status: :created,
        user: @user
        }
    else 
        render json: {
        status: 422,
        errors: @user.errors.full_messages
        }
    end
  end

  private
    
  def user_params
  params.require(:user).permit(:username, :email, :password, :password_confirmation, :role)
  end
end