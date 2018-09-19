import { connect } from 'react-redux';
import CommentIndex from './comments_index';
import { sortComments } from '../../reducers/selector';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = ({entities, session}, {post}) => {
  return {
    users: entities.users,
    comments: sortComments(entities.comments, post.id),
    postUser: entities.users[post.author_id],
    sessionId: session.id
  }
};

const mapDispatchToProps = (dispatch) => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mapStateToProps,
mapDispatchToProps)(CommentIndex);
