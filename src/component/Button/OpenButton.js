import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import PropTypes from 'prop-types';
import React from 'react';

const OpenButton = ({ onClick }) => (
  <div>
    <Button startIcon={<CheckIcon />} variant="outlined" color="default" onClick={onClick}>
      打开问题
    </Button>
  </div>
);

OpenButton.propTypes = {
  onClick: PropTypes.func,
};

export default OpenButton;
