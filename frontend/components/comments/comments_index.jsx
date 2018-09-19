import React from 'react';

export default class CommentIndex extends React.Component {

    render() {
        const comments = this.props.comments.map( comment=>{

            return (
             <li key={`li-${comment.id}`} className='comment-item'>
                    <h6 key={`li-${comment.id}`} className='comment-body'>
                        {comment.body} 
                    </h6>
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