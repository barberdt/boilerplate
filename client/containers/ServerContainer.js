import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Server from '../components/Server';
import {
  loadData as loadDataActionCreator,
} from '../actions/ServerActionCreators';

const propTypes = {
  data: PropTypes.object,
  loadData: PropTypes.func.isRequired,
  shouldLoadData: PropTypes.bool.isRequired,
  shouldRenderLoadingData: PropTypes.bool.isRequired,
};

const defaultProps = {
  data: null,
};

class ServerContainer extends React.Component {
  componentDidMount() {
    this.loadDataIfNeeded();
  }

  componentDidUpdate() {
    this.loadDataIfNeeded();
  }

  loadDataIfNeeded() {
    const { loadData, shouldLoadData } = this.props;
    if (shouldLoadData) {
      loadData();
    }
  }

  render() {
    const {
      loadData,
      shouldLoadData,
      ...restProps
    } = this.props;

    return <Server {...restProps} />;
  }
}

ServerContainer.propTypes = propTypes;
ServerContainer.defaultProps = defaultProps;

export default connect(
  ({ server: { isLoadingData, data } }) => ({
    shouldLoadData: !data && !isLoadingData,
    shouldRenderLoadingData: isLoadingData || !data,
    data,
  }),
  { loadData: loadDataActionCreator },
)(ServerContainer);
