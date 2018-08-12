import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UploadPostContainer from '../posts/upload_post_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let Component;
  switch(modal) {
    case 'createPost':
      Component = <UploadPostContainer />;
    default:
      return null;
  }

}
export default Modal;
