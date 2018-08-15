import React from 'react';
import UserShow from './user_show';
import {merge} from "lodash";
import PostIndexContainer from '../posts/post_index_container';
import UploadPostContainer from '../posts/upload_post_container';
import PostIndex from '../posts/post_index';
import { Link } from 'react-router-dom';
import Modal from '../modals/modal';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

componentDidMount() {
  this.props.fetchPosts();
}

    render() {
      const postsByUser =   this.props.postsByUser.map( post =>
        <div key={`picture-box-key-${post.id}`} className={`picture-box-${post.id}`}><img className='user-show-post' key={`user-show-post-${post.id}`} src={post.photoUrl} /></div>
       );
      return (
        <div>
        <embed src="http://www.dan-dare.org/Dan%20Potter/HarryPotterPhilosophersStoneTheme.mp3" width="0"  loop="false" autostart="true" hidden="true" />
        <hgroup className="header-group">
        <div className='dashboard-navbar'>
        <img className='insta-logo' src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" ></img>
        <Link to='/dashboard'>
          <img className="user-show-instapic-small"  src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38749082_1769735009788372_243286579940950016_n.jpg?_nc_cat=0&oh=6523cec7952760d9608eb243a59981c1&oe=5C121671'></img>
          </Link>
        <img className='search-img' src='https://www.freeiconspng.com/uploads/search-icon-png-1.png'/>
        <input className="search-box" type="text" placeholder="Search"></input>
          <button className='create-post-modal-dashboard' onClick={this.props.openModalPost}>New Post</button>

          <img className="empty-heart" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38874877_1771545116274028_9140465076254277632_n.jpg?_nc_cat=0&oh=c04991f09b8c3e22fdc10f87a77feda7&oe=5BFA37A8" />

                  <img className='in-user-icon'
                    src="https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-128.png"/>

          <img onClick={this.props.logout} className='compass' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38780715_1771545332940673_3483777273776046080_n.jpg?_nc_cat=0&oh=3814f0874c97771db9801d8e4145847a&oe=5BFC818F'/>
        </div>

      </hgroup>
        <div className='profile-body'>
          <img className='default-user-icon'
            onClick={this.props.openModalProfile}
            src={this.props.currentUser.avatarUrl} />
          <div>
          <h2 className='user-show-username'>{this.props.currentUser.username}</h2>
          <h2 className='bio'>Bio:</h2>
          <h3 className='bio-text'>{this.props.currentUser.bio}</h3>
            <Modal/>
          </div>
        </div>
        <div className='user-show-posts'>
        {postsByUser}
        </div>
      </div>
    );
    }
}


export default UserProfile;
