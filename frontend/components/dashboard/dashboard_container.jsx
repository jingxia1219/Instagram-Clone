import { connect } from 'react-redux';
import { logout } from  '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  posts: state.entities.posts
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
