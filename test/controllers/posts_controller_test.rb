require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get posts_create_url
    assert_response :success
  end

  test "should get update" do
    get posts_update_url
    assert_response :success
  end

  test "should get destroy" do
    get posts_destroy_url
    assert_response :success
  end

end
