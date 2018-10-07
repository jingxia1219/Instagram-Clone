import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comments/comments_form_container';
import CommentIndexContaine from '../comments/comments_index_containe';

class PostIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUsers();
  }


  render() {
    if (Object.keys(this.props.posts).length < 1) return null;
    if (Object.keys(this.props.users).length < 2) return null;
    // if ( !this.props.users) return null;
    // let fiveUsers;


    const featuredUsers = Object.values(this.props.users).map( user => {
      if (user === this.props.currentUser) {return null;} 
      // debugger;
      return (
      <div className="featured-user-icon" key={`featured-user-icon${user.id}`} >
          <li key={`li-${user.id}`}>
            <span className="current-user-icon-container">
            <Link to={`/user/${user.id}`}>
              <img className="current-user-icon" src={user.avatarUrl} />
            </Link>
            </span>
        </li>
      </div>
      );
    });

      const posts = this.props.posts.reverse().map( post=> {
        return (
        <div key={`div-${post.id}`} className='post-item'>
          <li className='post-container' key={post.id}>
            <div className='post-header'>
            <div className='profile-pic-small-container'>
              <Link to={`/user/${post.author_id}`}>
                <img className='profile-pic-small' key={`profile-pic-small-${post.id}`} src={this.props.users[post.author_id].avatarUrl} />
              </Link></div>
            <h6 key={`post-user-${post.id}-1`} className='post-user-top'>{this.props.users[post.author_id].username}</h6>
          </div>
            <div className='post-pic-container'><img  key={`img-${post.id}`} className="post-picture" src={post.photoUrl}/>
            </div>
            <img key={`heart-${post.id}`} className='like-heart' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39100399_1778594592235747_85684206713176064_n.jpg?_nc_cat=0&oh=7050129bffbc2b6d7a99ba00f5af8a52&oe=5C0BE074"/>
            <img key={`comment-${post.id}`} className='comment-logo' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39024220_1778594585569081_1067191603736608768_n.jpg?_nc_cat=0&oh=cdc88d2fca2d74c4e2d47fede3d606a5&oe=5BFFB142"/>
            <img key={`bookmark-${post.id}`} className='bookmark-logo' src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39165058_1778626478899225_3517323601172758528_n.jpg?_nc_cat=0&oh=bfdb93bf357be2050ae934221ddaf26f&oe=5BC52A9C"/>
            <h6 key={`post-user-${post.id}`} className='post-user'>{this.props.users[post.author_id].username}:<span className='post-description'>{post.description}</span></h6>
              <CommentIndexContaine post={post} />
              <CommentFormContainer post={post}/>
          </li>
        </div>
        );
      });
    return (
    <div className="post-page">
        <span className="featured-user">
          <div className='current-user-featured'>
            <span className="current-user-icon-container-main">
            <Link to={`/user/${this.props.currentUser.id}`}>
              <img className="current-user-icon" src={this.props.currentUser.avatarUrl} />
              </Link>
            </span>
            <span className="user-name-text">
              {this.props.currentUser.username}
            </span>
          </div>
          <span className='friend'>
             Featured Users
          </span>
          <ul className='featured-user'>{featuredUsers}</ul>
        </span>
        <ul className="post">{posts}</ul>
    </div>);

  }
}
export default PostIndex;
