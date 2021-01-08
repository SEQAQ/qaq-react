import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const CloseButton = ({ onClick }) => (
  <div>
    <Button startIcon={<CloseIcon />} variant="outlined" color="red" onClick={onClick}>
      关闭
    </Button>
  </div>
);

export default CloseButton;
