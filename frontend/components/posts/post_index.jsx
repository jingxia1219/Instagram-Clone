import React from 'react';

class PostIndex extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //   };
  //   // this.fetchPosts = this.fetchPosts.bind(this);
  // }

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

  }

  render() {
    // if (!this.props.posts) return null;
    console.log("this.props:", this.props);

      const posts = this.props.posts.map( post=> {
        return (
        <div key={`div-${post.id}`} className='post-item'>
          <li key={post.id}>
            <img  key={`img-${post.id}`} className="post-picture" src={post.photoUrl}/>
            <h6 key={`post-user-${post.id}`} className='post-user'>{this.props.users[post.author_id]}</h6>
            <span className='post-description'>{post.description}</span>
          </li>
        </div>
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
