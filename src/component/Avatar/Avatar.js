import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as MaterialAvatar } from '@material-ui/core';

const Avatar = (props) =>
  props.large ? (
    <div>
      <MaterialAvatar src={props.src} style={{ width: '160px', height: '160px' }} />
    </div>
  ) : (
    <div>
      <MaterialAvatar src={props.src} />
    </div>
  );

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

export default Avatar;
