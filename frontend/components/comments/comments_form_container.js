import{ connect} from 'react-redux';
import CommentIndex from './comments_form';
import { createComment, deleteComment, fetchComments } from '../../actions/comment_actions';
const mapStateToProps = ({session, entities}, ownProps) => ({
  comments: entities.comments,
  userId: session.id,
  postId: ownProps.id
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  fetchComments: (postId) => dispatch(fetchComments(postId))
});

export default connect(mapStateToProps,
mapDispatchToProps)(CommentIndex);
