import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { sortComments } from '../../reducers/selectors';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = ({entities, session}, {post}) => ({
  comments: sortComments(entities.comments, post.id),
  postUser: entities.users[post.user_id],
  sessionId: session.id
});

const mapDispatchToProps = dispatch => ({
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps,
mapDispatchToProps)(CommentIndex);
