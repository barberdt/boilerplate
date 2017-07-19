import React from 'react';
import { Link, Route } from 'react-router-dom';

import ServerContainer from '../containers/ServerContainer';

export default function App() {
  return (
    <div>
      <Link to="/server">Server</Link>
      <Link to="/client">Client</Link>
      <Route path="/server" component={ServerContainer} />
    </div>
  );
}
