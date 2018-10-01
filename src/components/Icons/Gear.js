import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import { darken, lighten } from 'polished';
import IconContainer from './IconContainer';

const getFill = (props) => {
  if (props.isSelected) {
    return props.theme.brand.info;
  } if (props.isOpen) {
    return props.theme.menu.primary;
  }
  return props.theme.menu.expanded;
};

const RotationContainer = IconContainer.extend`
  transform: ${props => (props.isSelected ? 'rotate(30deg)' : 'rotate(0deg)')};
  transition: border-left-color .2s, transform .2s;

  path {
    fill: ${props => getFill(props)};
  }

  &:hover {
    path {
      fill: ${props => lighten(0.1, getFill(props))}
    }
  }
`;

const Gear = props => (
    <RotationContainer {...props} onClick={props.handleClick}>
    <svg width={props.width} height={props.height} viewBox="0 0 489.802 489.802" preserveAspectRatio="xMidYMin">
      <path d="M20.701 281.901l32.1.2c4.8 24.7 14.3 48.7 28.7 70.5l-22.8 22.6c-8.2 8.1-8.2 21.2-.2 29.4l24.6 24.9c8.1 8.2 21.2 8.2 29.4.2l22.8-22.6c21.6 14.6 45.5 24.5 70.2 29.5l-.2 32.1c-.1 11.5 9.2 20.8 20.7 20.9l35 .2c11.5.1 20.8-9.2 20.9-20.7l.2-32.1c24.7-4.8 48.7-14.3 70.5-28.7l22.6 22.8c8.1 8.2 21.2 8.2 29.4.2l24.9-24.6c8.2-8.1 8.2-21.2.2-29.4l-22.6-22.8c14.6-21.6 24.5-45.5 29.5-70.2l32.1.2c11.5.1 20.8-9.2 20.9-20.7l.2-35c.1-11.5-9.2-20.8-20.7-20.9l-32.1-.2c-4.8-24.7-14.3-48.7-28.7-70.5l22.8-22.6c8.2-8.1 8.2-21.2.2-29.4l-24.6-24.9c-8.1-8.2-21.2-8.2-29.4-.2l-22.8 22.6c-21.6-14.6-45.5-24.5-70.2-29.5l.2-32.1c.1-11.5-9.2-20.8-20.7-20.9l-35-.2c-11.5-.1-20.8 9.2-20.9 20.7l-.3 32.1c-24.8 4.8-48.8 14.3-70.5 28.7l-22.6-22.8c-8.1-8.2-21.2-8.2-29.4-.2l-24.8 24.6c-8.2 8.1-8.2 21.2-.2 29.4l22.6 22.8c-14.6 21.6-24.5 45.5-29.5 70.2l-32.1-.2c-11.5-.1-20.8 9.2-20.9 20.7l-.2 35c-.1 11.4 9.2 20.8 20.7 20.9zm158.6-103.3c36.6-36.2 95.5-35.9 131.7.7s35.9 95.5-.7 131.7-95.5 35.9-131.7-.7-35.9-95.5.7-131.7z"/>
    </svg>
    </RotationContainer>
);

Gear.defaultProps = {
  width: '20px',
  height: '20px',
  isOpen: false,
  isSelected: false,
  fill: '#FAFAFA',
};

export default withTheme(Gear);
