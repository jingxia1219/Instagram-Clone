import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    // this.fetchPosts = this.fetchPosts.bind(this);
  }
  //
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
    this.props.fetchUsers();
    this.setState({users: this.props.users});
  }

  render() {
    if (Object.keys(this.props.posts).length === 0) return null;
    if (Object.keys(this.props.users).length < 2) return null;
    // if ( !this.props.users) return null;
    // debugger;

    console.log("THIS.props:", this.props.users);
    // debugger;
      const posts = this.props.posts.map( post=> {
        console.log("THIS.props,users[post.author_id]:", this.props.users[post.author_id-1]);
        return (
        <div key={`div-${post.id}`} className='post-item'>
          <li key={post.id}>
            <img  key={`img-${post.id}`} className="post-picture" src={post.photoUrl}/>
            <h6 key={`post-user-${post.id}`} className='post-user'>{this.props.users[post.author_id-1].username}:<span className='post-description'>{post.description}</span></h6>

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
