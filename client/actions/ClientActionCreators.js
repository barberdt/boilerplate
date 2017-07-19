import { LOAD_DATA } from './ClientActionTypes';
import { getData } from '../api/ClientApi';

// eslint-disable-next-line import/prefer-default-export
export function loadData() {
  return {
    type: LOAD_DATA,
    promise: getData(),
  };
}
