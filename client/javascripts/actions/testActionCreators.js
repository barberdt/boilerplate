import { FOO_CHANGED } from './testActionTypes';

// eslint-disable-next-line import/prefer-default-export
export function fooChanged(foo) {
  return { type: FOO_CHANGED, payload: { foo } };
}
