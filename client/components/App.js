import React from 'react';
import { Link, Route } from 'react-router-dom';

import TestContainer from '../containers/TestContainer';

export default function App() {
  return (
    <div>
      <div>
        <Link to="/test">Test</Link>
      </div>
      <div>
        <Link to="/not">Not Test</Link>
      </div>
      <Route path="/test" component={TestContainer} />
    </div>
  );
}
