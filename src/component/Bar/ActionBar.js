import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';

import { CommentButton, VoteButtonGroup } from '../Button';

const ActionBar = ({ commentClick, ...props }) => {
  const [vote, setVote] = useState(0);
  const variant = props.variant;
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
  return (
    <div className="feed-item-action">
      <VoteButtonGroup vote={vote} onUp={() => setVote(1)} onDown={() => setVote(2)} onCancel={() => setVote(0)} />
      <div style={{ marginLeft: 'auto' }}>
        <CommentButton onClick={commentClick} />
      </div>
    </div>
  );
};

export default ActionBar;
