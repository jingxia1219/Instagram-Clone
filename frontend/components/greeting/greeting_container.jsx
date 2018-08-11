import { connect } from 'react-redux';
import { logout, login } from  '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  demoLogin: (demoUser) => dispatch(login(demoUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
