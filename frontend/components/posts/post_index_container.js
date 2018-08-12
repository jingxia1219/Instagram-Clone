import { connect } from 'react-redux';
import { logout } from  '../../actions/session_actions';
import {fetchPost, deletePost, fetchPosts, createPost} from '../../actions/posts/post_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => ({
  posts: state.entities.posts
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  fetchPosts: () => dispatch(fetchPosts()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
