import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';

const Popup = ({ open, handleClose, severity, msg }) => (
  <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
    <MuiAlert onClose={handleClose} severity={severity}>
      {msg}
    </MuiAlert>
  </Snackbar>
);

export default Popup;
