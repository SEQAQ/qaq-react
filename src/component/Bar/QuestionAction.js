import PropTypes from 'prop-types';
import React from 'react';

import { EditButton } from '..';
import { FollowButton } from '../Button';
import AnswerButton from '../Button/AnswerButton';
import CloseButton from '../Button/CloseButton';
import DelButton from '../Button/DeleteButton';
import OpenButton from '../Button/OpenButton';

const QuestionAction = ({ status, followed, followHandler, answerHandler, isAsker, editHandler, closeHandler, openHandler, deleteHandler }) => {
  const closed = status === 2;
  return (
    <div className="feed-item-action">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <FollowButton onClick={() => followHandler(followed)} followed={followed} style={{ marginRight: '16px' }} />
        {status !== 2 && (
          <div style={{ marginRight: '16px' }}>
            <AnswerButton onClick={answerHandler} />
          </div>
        )}
        {isAsker && (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {
              <div style={{ marginRight: '16px' }}>
                <EditButton onClick={editHandler} />
              </div>
            }
            {closed ? (
              <div style={{ marginRight: '16px' }}>
                <OpenButton onClick={openHandler} />
              </div>
            ) : (
              <div style={{ marginRight: '16px' }}>
                <CloseButton onClick={closeHandler} />
              </div>
            )}
            <div style={{ marginRight: '16px' }}>
              <DelButton onClick={deleteHandler} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
QuestionAction.propTypes = {
  followed: PropTypes.bool.isRequired,
  followHandler: PropTypes.func.isRequired,
  answerHandler: PropTypes.func.isRequired,
};

export default QuestionAction;
