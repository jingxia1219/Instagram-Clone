import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      posts: [],
    };
  }
  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    // if (!this.props.posts) return null;
    console.log("console.log(post):",this.props.posts);
    const posts = this.state.posts.map( post=> <li>{post.description}</li>);
    return (
      <div>
        <h2>Next line is RENDERING posts</h2>
        {posts}
      </div>
    );

  }
}
export default PostIndex;
