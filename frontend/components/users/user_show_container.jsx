import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import React from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = ({entities}) => ({
  currentUserId: entities.session.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
