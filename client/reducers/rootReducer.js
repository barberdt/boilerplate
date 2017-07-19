import { combineReducers } from 'redux';

import serverReducer from './serverReducer';

export default combineReducers({
  server: serverReducer,
});
