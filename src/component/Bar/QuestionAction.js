import PropTypes from 'prop-types';
import React from 'react';

import { FollowButton } from '../Button';
import AnswerButton from '../Button/AnswerButton';

const QuestionAction = ({ followed, followHandler }) => (
  <div className="feed-item-action">
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <FollowButton onClick={() => followHandler(followed)} followed={followed} style={{ marginRight: '16px' }} />
      <AnswerButton />
    </div>
  </div>
);

QuestionAction.propTypes = {
  followed: PropTypes.bool.isRequired,
  followHandler: PropTypes.func.isRequired,
};

export default QuestionAction;
