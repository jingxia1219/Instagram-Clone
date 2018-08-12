import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    // this.fetchPosts = this.fetchPosts.bind(this);
  }
  //
  // fetchPosts() {
  //   $.ajax({
  //     url: "/api/posts"
  //   }).then(posts => {
  //     this.setState({posts});
  //   });
  // }
  componentDidMount(){
    this.props.fetchPosts();
    // this.fetchPosts();
  }

  render() {
    // if (!this.props.posts) return null;
    console.log("console.log(post): ABLE TO GET POSTS?",this.props.posts);

      const posts = this.props.posts.map( post=> {
        return (
        <li key={post.id}>
          {post.description}
          <img src={post.photoUrl}/>
        </li>

        );
      });
    return (
      <div>
        <ul>
          {posts}
        </ul>
      </div>
    );

  }
}
export default PostIndex;
