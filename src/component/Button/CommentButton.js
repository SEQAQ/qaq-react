import { Button } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import React from 'react';

import { style } from '../../utils/style';

const CommentButton = () => {
  const textStyle = style().greyText;
  return (
    <div>
      <Button startIcon={<ChatBubbleOutlineIcon />} variant="text" className={textStyle}>
        评论
      </Button>
    </div>
  );
};

export default CommentButton;
