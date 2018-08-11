import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    // if (!this.props.posts) return null;
    console.log(this.props.posts);
    // const posts = this.props.posts.map( post=> <li>{post.description}</li>);
    return (
      <div>
        
      </div>
    );

  }
}
export default PostIndex;
