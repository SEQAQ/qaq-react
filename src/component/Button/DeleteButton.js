import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

const DelButton = ({ onClick }) => (
  <div>
    <Button startIcon={<DeleteIcon />} variant="outlined" color="secondary" onClick={onClick}>
      删除
    </Button>
  </div>
);

export default DelButton;
