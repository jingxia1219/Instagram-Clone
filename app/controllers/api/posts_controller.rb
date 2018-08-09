class Api::PostsController < ApplicationController
  def index
    if params[:author_id]
      @posts = Post.where(author_id: params[:author_id])
      render :index
    else
      @posts = Post.all
      render :index
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render: index
    else
      render json:'Post not found'!, status: 404
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
    @post = Post.params[:id]
    @Post.destroy
  end

  private
  def post_params
    params.require(:post).permit(:author_id, :description)
  end
end
