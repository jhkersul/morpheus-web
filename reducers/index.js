import { combineReducers } from 'redux';

import twitter from './twitter';
import general from './general';

export default combineReducers({
  twitter,
  general,
});
