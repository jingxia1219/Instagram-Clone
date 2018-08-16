import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../actions/posts/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import UploadPost from './upload_post';
const mapStateToProps = (session) => ({
  userId: session.id,
  formType: 'createPost'
});

const mapDispatchToProps = (dispatch) => ({
  createPost: post => dispatch(createPost(post)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps
,mapDispatchToProps)(UploadPost);
