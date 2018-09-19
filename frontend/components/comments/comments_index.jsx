import React from 'react';
import { Link } from 'react-router-dom';

export default class CommentIndex extends React.Component {

    render() {
        const comments = this.props.comments.map( comment=>{
            console.log(this.props.users)
            return (
             <li key={`li-${comment.id}`} className='comment-item'>
                    <h6 key={`li-${comment.id}-user`} className='post-user'>
                        {this.props.users[comment.user_id].username} 
                    </h6>
                    <span key={`li-${comment.id}-content`} className='post-description'>
                        {comment.body} 
                    </span>
             </li>
                );
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