import { connect } from 'react-redux';
import CommentIndex from './comments_index';
import { sortComments } from '../../reducers/selector';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = ({entities, session}, {post}) => {
  console.log("postinState:", post);
  return {
  comments: sortComments(entities.comments, post.id),
  postUser: entities.users[post.user_id],
  sessionId: session.id
  }
};

const mapDispatchToProps = dispatch => ({
  deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps,
mapDispatchToProps)(CommentIndex);
