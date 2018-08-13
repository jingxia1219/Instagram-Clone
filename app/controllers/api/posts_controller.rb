class Api::PostsController < ApplicationController
  def index
      @posts = Post.all
      render :index
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :index
    else
      render json:'Post not found!', status: 404
    end
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
  end

  private
  def post_params
    params.require(:post).permit(:author_id, :description, :photoUrl)
  end
end
