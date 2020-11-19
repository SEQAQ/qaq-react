import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';

const SendButton = ({ ...props }) => (
  <div>
    <Button startIcon={<SendIcon />} variant="outlined" color="primary" {...props}>
      发送
    </Button>
  </div>
);

export default SendButton;
