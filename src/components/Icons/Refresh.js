import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import IconContainer from './IconContainer';

const Refresh = props => {
  return (
    <IconContainer {...props}>
      <svg viewBox="0 0 491.236 491.236" width={props.width} height={props.height} preserveAspectRatio="xMidYMin">
        <path d="M55.89 262.818c-3-26-.5-51.1 6.3-74.3 22.6-77.1 93.5-133.8 177.6-134.8v-50.4c0-2.8 3.5-4.3 5.8-2.6l103.7 76.2c1.7 1.3 1.7 3.9 0 5.1l-103.6 76.2c-2.4 1.7-5.8.2-5.8-2.6v-50.3c-55.3.9-102.5 35-122.8 83.2-7.7 18.2-11.6 38.3-10.5 59.4 1.5 29 12.4 55.7 29.6 77.3 9.2 11.5 7 28.3-4.9 37-11.3 8.3-27.1 6-35.8-5-21.3-26.6-35.5-59-39.6-94.4zm299.4-96.8c17.3 21.5 28.2 48.3 29.6 77.3 1.1 21.2-2.9 41.3-10.5 59.4-20.3 48.2-67.5 82.4-122.8 83.2v-50.3c0-2.8-3.5-4.3-5.8-2.6l-103.7 76.2c-1.7 1.3-1.7 3.9 0 5.1l103.6 76.2c2.4 1.7 5.8.2 5.8-2.6v-50.4c84.1-.9 155.1-57.6 177.6-134.8 6.8-23.2 9.2-48.3 6.3-74.3-4-35.4-18.2-67.8-39.5-94.4-8.8-11-24.5-13.3-35.8-5-11.8 8.7-14 25.5-4.8 37z"/>
      </svg>
    </IconContainer>
  );
}

Refresh.defaultProps = {
  width: '20px',
  height: '20px',
  isOpen: false,
  fill: '#FAFAFA',
}

export default withTheme(Refresh);
