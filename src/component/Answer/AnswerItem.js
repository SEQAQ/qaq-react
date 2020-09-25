import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '../Avatar/Avatar';
import { ActionBar } from '../Bar';

const Answer = ({ data }) => (
  <>
    <div id="userInfo" style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={'123'} size="small" />
      <div style={{ marginLeft: '15px', flex: '1 1' }}>
        <div>{data.author}</div>
        <div>{data.dept}</div>
      </div>
    </div>
    <div style={{ marginTop: '10px' }}>{data.content}</div>
    <ActionBar />
  </>
);

Answer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Answer;