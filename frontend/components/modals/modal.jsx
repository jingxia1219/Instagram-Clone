import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UploadPostContainer from '../posts/upload_post_container';
//import update profile container
;

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch(modal) {
    case 'createPost':
      component = <UploadPostContainer />;
      break;
    case 'UpdateProfile':
      component = <UpdateProfileContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className='modal-background' onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
