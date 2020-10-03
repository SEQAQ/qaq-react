import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react';

const AnswerButton = () => (
  <div>
    <Button startIcon={<CreateIcon />} variant="outlined" color="primary">
      我来答
    </Button>
  </div>
);

export default AnswerButton;
