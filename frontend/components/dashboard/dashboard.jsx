import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import UploadPostContainer from '../posts/upload_post_container';
import PostIndex from '../posts/post_index';
import { Link } from 'react-router-dom';
import Modal from '../modals/modal';
import Follow from '../users/follow_container';

const personalGreeting = ({currentUser, logout, posts, modalOpen}) => {

  return <div className="post-body">
      <hgroup className="header-group">
        <div className="dashboard-navbar">
        <Link to="/dashboard"> <img className="insta-logo" src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png" />
        </Link>
          <Link to="/dashboard">
            <img className="instapic-small" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38749082_1769735009788372_243286579940950016_n.jpg?_nc_cat=0&oh=6523cec7952760d9608eb243a59981c1&oe=5C121671" />
          </Link>
          <img className="search-img" src="https://www.freeiconspng.com/uploads/search-icon-png-1.png" />
          <input className="search-box" type="text" placeholder="Search" />
          <button className="create-post-modal-dashboard" onClick={modalOpen}>
            New Post
          </button>
          <Modal />
          <img className="empty-heart" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38874877_1771545116274028_9140465076254277632_n.jpg?_nc_cat=0&oh=c04991f09b8c3e22fdc10f87a77feda7&oe=5BFA37A8" />
          <Link to={`/user/${currentUser.id}`}>
            <img className="user-icon" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/38792536_1771544876274052_120399194711130112_n.jpg?_nc_cat=0&oh=cf5c93cafd2f4f659a349a05660ddbff&oe=5C0F99EE" />
          </Link>
          <img onClick={logout} className="compass" title="Log out" src="https://png2.kisspng.com/20180401/izw/kisspng-computer-icons-arrow-exit-5ac1aa4a3a2154.0432564515226414822381.png" />
        </div>
      </hgroup>

      <PostIndexContainer posts={posts} />
    </div>;
};

export default personalGreeting;
