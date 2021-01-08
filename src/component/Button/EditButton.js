import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import PropTypes from 'prop-types';
import React from 'react';

const EditButton = ({ onClick }) => (
  <div>
    <Button startIcon={<CreateIcon />} variant="outlined" color="grey" onClick={onClick}>
      编辑
    </Button>
  </div>
);

EditButton.propTypes = {
  onClick: PropTypes.func,
};

export default EditButton;
