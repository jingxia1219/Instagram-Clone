class Api::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def update
    @user = User.find(params[:id])
    # debugger
    # @user.profile_picture.attach(params[:user][:avatarUrl])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

    private
    def user_params
      params.require(:user).permit(:username,:password,:email,:bio, :profile_picture)
    end

end
