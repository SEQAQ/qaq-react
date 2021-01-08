import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Comments, Editor } from '..';
import { sendAnsReply } from '../../services/ReplyService';
import Avatar from '../Avatar/Avatar';
import { ActionBar } from '../Bar';

const Answer = ({ data, fetchComment, showDelete, onDelete }) => {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');
  const comments = data.comments;

  const commentClick = () => {
    if (!showComment) {
      fetchComment(data.aid);
    }
    setShowComment(!showComment);
  };

  // console.log(data);

  const deleteMediator = () => {
    const id = data.aid;
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <>
      <div id="userInfo" style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={'123'} size="small" />
        <div style={{ marginLeft: '15px', flex: '1 1' }}>
          <div>{data.author}</div>
          <div>{data.dept}</div>
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <ReactMarkdown>{data.detail}</ReactMarkdown>
      </div>
      {/* COMMENT SECTION */}
      <ActionBar commentClick={commentClick} showDelete={showDelete} deleteClick={deleteMediator} />
      {showComment && (
        <>
          <Editor
            onChange={(e) => setComment(e.target.value)}
            onSubmit={() => {
              // TODO: popup error msg on failure
              sendAnsReply(data.aid, comment).then(() => fetchComment(data.aid));
            }}
          />
          <Comments dataSource={comments} />
        </>
      )}
    </>
  );
};

Answer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Answer;
