import { connect } from 'react-redux';
import UploadPost from './upload_post';
import { createPost } from '../../actions/posts/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
const mapStateToProps = (session) => ({
  userId: session.id,
  formType: 'createPost'
});

const mapDispatchToProps = (dispatch) => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps
,mapDispatchToProps)(UploadPost);
