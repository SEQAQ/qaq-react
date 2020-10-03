import { Avatar as MaterialAvatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Avatar = (props) => {
  const { size = 'small' } = props;

  const sizes = {
    large: { width: '160px', height: '160px' },
    medium: { width: '68px', height: '68px' },
    small: {},
  };

  return (
    <div>
      <MaterialAvatar src={props.src} style={{ ...sizes[size] }} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Avatar;
