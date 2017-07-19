import { combineReducers } from 'redux';

import serverReducer from './serverReducer';
import clientReducer from './clientReducer';

export default combineReducers({
  client: clientReducer,
  server: serverReducer,
});
