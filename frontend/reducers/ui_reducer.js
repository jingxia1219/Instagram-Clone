import { combineReducers } from 'redux';

import filters from './filter_reducer';
import modal from './modal_reducer';

export default combineReducers({
  filters,
  modal
});
