import { FOO_CHANGED } from '../actions/testActionTypes';

const INITIAL_STATE = {
  foo: 'bar',
};

export default function testReducer(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case FOO_CHANGED:
      return {
        ...state,
        foo: payload.foo,
      };

    default:
      return state;
  }
}
