import React from 'react';
import { withRouter } from 'react-router';
import {merge} from 'lodash';
import { Link } from 'react-router-dom';
class Follow extends React.Component {

  componentDidMount() {
    this.props.fetchFollows(this.props.currentUser);
  }

  render() {
    const followees = this.props.followees.map( followee => {
      return (
        <Link to={`/user/${followee.id}`} key={`link-${followee.id}`}>
          <img src={followee.avatarUrl} key={`followee-${followee.id}`}/>
        </Link>
      );
    });
  return (
    <div className='followee-list'>
      {followees}
    </div>
  );
  }
}

export default Follow;
