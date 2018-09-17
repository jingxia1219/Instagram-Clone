class Api::CommentsController < ApplicationController
  before_action :require_login

  def index
    # @post = Post.find(params[:post_id])
    @comments = Comment.all
  end

  def create
    # p @comment
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    @comment.post_id = params[:comment][:postId]
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
