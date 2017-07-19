import React from 'react';
import { Link, Route } from 'react-router-dom';

import ServerContainer from '../containers/ServerContainer';
import ClientContainer from '../containers/ClientContainer';
import { css, withStyles, withStylesPropTypes } from '../styles/withStyles';

const propTypes = {
  ...withStylesPropTypes,
};

function App({ styles }) {
  return (
    <div {...css(styles.app)}>
      <div {...css(styles.nav)}>
        <Link {...css(styles.navItem)} to="/server">
          Server
        </Link>
        <Link {...css(styles.navItem)} to="/client">
          Client
        </Link>
      </div>
      <div {...css(styles.content)}>
        <h1 {...css(styles.heading)}>Boilerplate</h1>
        <Route path="/server" component={ServerContainer} />
        <Route path="/client" component={ClientContainer} />
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default withStyles(({ color, font }) => ({
  app: {
    ...font,
  },
  nav: {
    background: color.primary,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
  },
  navItem: {
    textDecoration: 'none',
    margin: 10,
    color: color.white,
  },
  heading: {
    color: color.secondary,
  },
  content: {
    padding: '0 20px',
  },
}))(App);
