import React from 'react';
import {withRouter} from 'react-router';
import {merge} from 'lodash';

class UpdateUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: this.props.currentUser.bio,
      avatarUrl: null,
      photoFile: null
    };
    this.filename = null;
  }
  
  handleFile(e) {
    const file = e.currentTarget.files[0];
    this.filename = file.name;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, avatarUrl: fileReader.result});
    };
      if (file) {
        fileReader.readAsDataURL(file);
      }
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
    formData.append('user[profile_picture]', this.state.photoFile);
    }
    // debugger
    this.props.updateUser( {userId: this.props.currentUser.id, user: formData});
    this.setState({
      bio: this.props.currentUser.bio,
      avatarUrl: null,
      photoFile: null,
    }, this.props.closeModal
   );
  }

  render() {
    const preview = this.state.avatarUrl ? <img className='preview' src={this.state.avatarUrl} />
    : null;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label><h2>Edit Profile</h2></label>

          <input type="file" onChange={this.handleFile.bind(this)}/>
            <div className='preview-box'>{preview}</div>
              <input className='make-post-button' type='submit' value='Update'/>
      </form>
    );
  }
}

export default UpdateUserProfile;
