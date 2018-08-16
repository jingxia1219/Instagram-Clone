require 'test_helper'

class Api::FollowsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_follows_index_url
    assert_response :success
  end

  test "should get create" do
    get api_follows_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_follows_destroy_url
    assert_response :success
  end

end
