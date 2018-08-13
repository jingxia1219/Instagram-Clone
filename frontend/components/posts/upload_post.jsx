import React from 'react';
import {withRouter} from 'react-router';
import {merge} from 'lodash';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      description: "",
      photoUrl: null,
      photoFile: null
    };
    this.filename = null;
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    this.filename = file.name;
    const fileReader = new FileReader();
    fileReader.onloadend= () => {
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
    formData.append('post[photoUrl]', this.state.photoUrl);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    console.log(formData);
    $.ajax({
      url:'/api/posts',
      method:'post',
      data: formData,
      contentType: false,
      processData: false
    });
    this.setState({photoUrl: this.state.photoUrl});

  }
  handleInput(e) {
    this.setState({description: e.currentTarget.value});
  }
  render(){
    // console.log("CONSOLE.LOG(THIS.STATE)",this.state);
    const preview = this.state.photoUrl ? <img className='preview' src={this.state.photoUrl} />
  : null;
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>description</label>
          <input onChange={this.handleInput.bind(this)} type='text'
            value={this.state.description}/>
        <input type="file" onChange={this.handleFile.bind(this)}/>
        <h3>Image preview</h3>
        {preview}
        <input type='submit' value='Make a new Post!'/>
        </form>
    );
  }

}

export default CreatePost;
