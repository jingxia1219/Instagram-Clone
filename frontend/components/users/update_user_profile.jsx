import React from 'react';
import {withRouter} from 'react-router';
import {merge} from 'lodash';

class UpdateUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: this.props.currentUser.bio,
      avatar_url: null,
      photoFile: null
    };
    this.filename = null;
  }

  handleSubmit(e){
    const formData = new FormData();
    formData.append('profile[avatar_url]', this.state.avatar_url);
    if (this.state.photoFile) {
    formData.append('profile[photo]', this.state.photoFile);
    }
    this.setState({
      avatar_url: "",
      photoFile: null,
    }, this.props.closeModal
   );
  }

  handleInput(e) {
    this.setState({
      bio: e.currentTarget.value
    });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    this.filename = file.name;
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, avatar_url:
      fileReader.result});
      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  }

  render() {
    const preview = this.state.avatar_url ? <img className='preview' src={this.state.avatar_url} />
    : null;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label><h2>
          Edit Profile
        </h2></label>
      <input className='modal-description'
        placeholder={`bio: ${this.props.currentUser.bio}`}
         onChange={this.handleInput.bind(this)} type='text'
          value={this.state.description}/>
          <input type="file" onChange={this.handleFile.bind(this)}/>
            <div className='preview-box'>{preview}</div>
              <input className='make-post-button' type='submit' value='Update'/>
      </form>
    );
  }
}

export default UpdateUserProfile;
