import { LOAD_DATA } from './ServerActionTypes';
import { getData } from '../api/ServerApi';

// eslint-disable-next-line import/prefer-default-export
export function loadData() {
  return {
    type: LOAD_DATA,
    promise: getData(),
  };
}
