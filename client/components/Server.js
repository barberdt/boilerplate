import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }),
  shouldRenderLoadingData: PropTypes.bool,
};

const defaultProps = {
  data: null,
  shouldRenderLoadingData: false,
};

export default function Server({ data, shouldRenderLoadingData }) {
  return (
    <div>
      {shouldRenderLoadingData && <div>Loading data...</div>}
      {!shouldRenderLoadingData && !data && <div>There is no data.</div>}
      {!shouldRenderLoadingData && data && (
        <div>
          <h2>{data.title}</h2>
          <div>{data.summary}</div>
        </div>
      )}
    </div>
  );
}

Server.propTypes = propTypes;
Server.defaultProps = defaultProps;
