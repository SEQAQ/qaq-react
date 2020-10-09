import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import PropTypes from 'prop-types';
import React from 'react';

const AnswerButton = ({ onClick }) => (
  <div>
    <Button startIcon={<CreateIcon />} variant="outlined" color="primary" onClick={onClick}>
      我来答
    </Button>
  </div>
);

AnswerButton.propTypes = {
  onClick: PropTypes.func,
};

export default AnswerButton;
