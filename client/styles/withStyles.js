import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, ThemeProvider, withStyles } from 'react-with-styles';
import PropTypes from 'prop-types';

import Theme from './Theme';

ThemedStyleSheet.registerDefaultTheme(Theme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

const withStylesPropTypes = {
  styles: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export {
  css,
  ThemedStyleSheet,
  ThemeProvider,
  withStyles,
  withStylesPropTypes,
};
