import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Client from '../components/Client';
import {
  loadData as loadDataActionCreator,
} from '../actions/ClientActionCreators';

const propTypes = {
  data: PropTypes.object,
  loadData: PropTypes.func.isRequired,
  shouldLoadData: PropTypes.bool.isRequired,
  shouldRenderLoadingData: PropTypes.bool.isRequired,
};

const defaultProps = {
  data: null,
};

class ClientContainer extends React.Component {
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

    return <Client {...restProps} />;
  }
}

ClientContainer.propTypes = propTypes;
ClientContainer.defaultProps = defaultProps;

export default connect(
  ({ client: { isLoadingData, data } }) => ({
    shouldLoadData: !data && !isLoadingData,
    shouldRenderLoadingData: isLoadingData || !data,
    data,
  }),
  { loadData: loadDataActionCreator },
)(ClientContainer);
