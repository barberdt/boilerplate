import { handle } from 'redux-pack';

import { LOAD_DATA } from '../actions/ServerActionTypes';

const INITIAL_STATE = {
  data: null,
  isLoadingData: false,
};

export default function serverReducer(state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (type) {
    case LOAD_DATA:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          data: null,
          isLoadingData: true,
        }),
        finish: prevState => ({
          ...prevState,
          isLoadingData: false,
        }),
        success: prevState => ({
          ...prevState,
          data: payload,
        }),
      });
    default:
      return state;
  }
}
