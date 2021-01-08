import Chip from '@material-ui/core/Chip';
import React from 'react';

const Level = ({ levelNum }) => <Chip label={`Lv. ${levelNum}`} color="primary" />;

export default Level;
