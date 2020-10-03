import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import PropTypes from 'prop-types';
import React from 'react';

const FollowButton = ({ followed, onClick, ...otherProps }) => {
  const muiBtnProps = {
    color: followed ? 'default' : 'primary',
    variant: 'contained',
    startIcon: followed ? <CheckIcon /> : <AddIcon />,
    onClick,
  };

  return (
    <Button {...muiBtnProps} {...otherProps}>
      {followed ? '已关注' : '关注'}
    </Button>
  );
};

FollowButton.propTypes = {
  followed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FollowButton;
