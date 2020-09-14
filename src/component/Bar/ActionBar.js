import React, { useState } from 'react';

import { CommentButton, VoteButtonGroup } from '../Button';

const ActionBar = () => {
  const [vote, setVote] = useState(0);

  return (
    <div className="feed-item-action">
      <VoteButtonGroup vote={vote} onUp={() => setVote(1)} onDown={() => setVote(2)} onCancel={() => setVote(0)} />
      <div style={{ marginLeft: 'auto' }}>
        <CommentButton />
      </div>
    </div>
  );
};

export default ActionBar;
