class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /comments/1
  # GET /comments/1.json
  def show
  end

  # GET /comments/1/edit
  def edit
  end

  # POST /comments
  # POST /comments.json
  def create
  	@post = Post.find(params[:post_id])
    @comment = @post.comments.new(comment_params)

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comment, notice: 'Comment was successfully created.' }
        format.json { render json: @comment, status: :created }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render json: @comment, status: :ok}
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # PUT /posts/1/comments/1/upvote
  def upvote
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    Comment.increment_counter(:upvotes, params[:id])
    respond_to do |format|
      format.html {redirect_to @post, notice: 'Upvoted!'}
      format.json { render json: @comment, status: :ok}
    end
  end

  # PUT /posts/1/comments/1/downvote
  def downvote
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    Comment.decrement_counter(:upvotes, params[:id])
    respond_to do |format|
      format.html {redirect_to @post, notice: 'Downvoted!'}
      format.json { render json: @comment, status: :ok}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:body)
    end
end
