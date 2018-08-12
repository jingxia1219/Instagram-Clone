import React from 'react';
import {withRouter} from 'react-router';
import {merge} from 'lodash';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {
      description: "",
      photoUrl: null,
      photoFile: null
    }};
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloaded= () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[description]', this.state.description);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    $.ajax({
      url:'/api/posts',
      method:'post',
      data: formData,
      contentType: false,
      processData: false
    })
    ;
  }
  handleInput(e) {
    this.setState({description: e.currentTarget.value});
  }
  render(){
    console.log(this.state);
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} />
  : null;
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>description</label>
          <input onChange={this.handleInput.bind(this)} type='text'
            value={this.state.description}/>
        <input type="file" onChange={this.handleFile.bind(this)}/>
        <h3>Image preview</h3>
        {preview}
        <button>Make a new post!</button>
        </form>
    );
  }

}

export default CreatePost;
