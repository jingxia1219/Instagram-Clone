import React from 'react';
import { Link } from 'react-router-dom';

export default class CommentIndex extends React.Component {

    render() {
        const comments = this.props.comments.map( comment=>{
            console.log(this.props.users)
            return (<li key={`li-${comment.id}`} className="comment-item">
                <div className='comment-line'>
                <h6 key={`li-${comment.id}-user`} className="post-user">
                  {this.props.users[comment.user_id].username}
                </h6>
                <span key={`li-${comment.id}-content`} className="post-description">
                  {comment.body}
                </span>
                </div>
                <span>
                  <img className='comment-delete-logo' src="https://cdn3.iconfinder.com/data/icons/essentials-volume-i/128/x-box-7-512.png" />
                </span>
              </li>);
            }
        ); 
        return (
            <div className='comment'>
                <ul>
                    {comments}
                </ul>
            </div>
        )
    }
}