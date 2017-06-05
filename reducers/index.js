import { combineReducers } from 'redux';

import twitter from './twitter';
import general from './general';
import analyze from './analyze';

export default combineReducers({
  twitter,
  general,
  analyze,
});
