// eslint-disable-next-line import/prefer-default-export
export function getData() {
  return global.window.fetch('/api/client').then(res => (
    res.json().then(json => json)
  ));
}
