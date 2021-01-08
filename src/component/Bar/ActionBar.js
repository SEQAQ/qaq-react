import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';

import { CommentButton, VoteButtonGroup } from '../Button';
import DelButton from '../Button/DeleteButton';

const ActionBar = ({ showDelete, deleteClick, commentClick, initialVote, ...props }) => {
  const [vote, setVote] = useState(initialVote === undefined ? 0 : initialVote ? 1 : 2);
  const variant = props.variant;
  const follower = props.follower;
  const followed = props.followed;

  if (variant === 'question') {
    return (
      <>
        <div className="feed-item-action">
          <Button variant="contained" color="primary" endIcon={<AddIcon />}>
            关注
          </Button>
          <div style={{ marginLeft: 'auto' }}>
            <CommentButton onClick={commentClick} />
          </div>
        </div>
      </>
    );
  }
  if (variant === 'user') {
    return (
      <>
        <div className="feed-item-action">
          <div className="feed-source">{follower}关注者</div>
          <div className="feed-source" style={{ marginLeft: '20px' }}>
            {followed}关注
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Button variant="contained" color="primary" endIcon={<AddIcon />}>
              关注
            </Button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="feed-item-action">
      <VoteButtonGroup vote={vote} onUp={() => setVote(1)} onDown={() => setVote(2)} onCancel={() => setVote(0)} />
      <div style={{ marginLeft: 'auto' }}>
        <CommentButton onClick={commentClick} />
      </div>
      {showDelete && (
        <div style={{ marginLeft: '16px' }}>
          <DelButton onClick={deleteClick} />
        </div>
      )}
    </div>
  );
};

export default ActionBar;
