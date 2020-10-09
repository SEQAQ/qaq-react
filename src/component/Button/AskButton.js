import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import PropTypes from 'prop-types';
import React from 'react';

const AskButton = ({ onClick }) => (
  <div>
    <Button startIcon={<CreateIcon />} variant="contained" color="primary" onClick={onClick}>
      提问
    </Button>
  </div>
);

AskButton.propTypes = {
  onClick: PropTypes.func,
};

export default AskButton;
