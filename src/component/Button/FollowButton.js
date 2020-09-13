import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const FollowButton = () => (
  <Button color="primary" variant="contained" startIcon={<AddIcon />}>
    关注
  </Button>
);

export default FollowButton;
