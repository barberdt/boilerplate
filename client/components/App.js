import React from 'react';
import { Link, Route } from 'react-router-dom';

import ServerContainer from '../containers/ServerContainer';
import ClientContainer from '../containers/ClientContainer';

export default function App() {
  return (
    <div>
      <Link to="/server">Server</Link>
      <Link to="/client">Client</Link>

      <h1>Boilerplate</h1>

      <Route path="/server" component={ServerContainer} />
      <Route path="/client" component={ClientContainer} />
    </div>
  );
}
