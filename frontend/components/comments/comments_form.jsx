import React from 'react';
import { Link } from 'react-router-dom';
import {merge} from 'lodash';
class CommentIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId :this.props.userId,
      postId : this.props.postId,
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = merge({}, this.state);
    this.props.createComment(comment);
    this.setState({
      body: ''
    });
  }

  handleInput(e) {
    this.setState(
      {body: e.target.value}
    );
  }


  render() {
    return (
      <div className="comment-container">
      <form className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
        <input className='comment-box'
          onChange={this.handleInput.bind(this)}
          type="text" value={this.state.body} placeholder="Add a comment">
        </input>
        <input className='hidden-button' type='submit' />
      </form>
      </div>
    );
  }
}

export default CommentIndex;
