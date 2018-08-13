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
        // console.log("THIS.props,users[post.author_id]:", this.props.users[post.author_id-1]);
        return (
        <div key={`div-${post.id}`} className='post-item'>
          <li key={post.id}>
            <h6 key={`post-user-${post.id}-1`} className='post-user'>{this.props.users[post.author_id-1].username}</h6>
            <img  key={`img-${post.id}`} className="post-picture" src={post.photoUrl}/>
            <img key={`heart-${post.id}`} className='like-heart' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39100399_1778594592235747_85684206713176064_n.jpg?_nc_cat=0&oh=7050129bffbc2b6d7a99ba00f5af8a52&oe=5C0BE074"/>
            <img key={`cooment-${post.id}`} className='comment-logo' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39024220_1778594585569081_1067191603736608768_n.jpg?_nc_cat=0&oh=cdc88d2fca2d74c4e2d47fede3d606a5&oe=5BFFB142"/>
            <img key={`bookmark-${post.id}`} className='bookmark-logo' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39165058_1778626478899225_3517323601172758528_n.jpg?_nc_cat=0&oh=bfdb93bf357be2050ae934221ddaf26f&oe=5BC52A9C"/>
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
