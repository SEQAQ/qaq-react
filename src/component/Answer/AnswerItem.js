import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Comments, Editor } from '..';
import { sendAnsReply, sendCommentReply } from '../../services/ReplyService';
import Avatar from '../Avatar/Avatar';
import { ActionBar } from '../Bar';

const Answer = ({ data, fetchComment, showDelete, onDelete }) => {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');
  const [focus, setFocus] = useState(-1); // focused comment
  const [placeholder, setPlaceholder] = useState('说说你的看法');
  const comments = data.comments;
  const vote = data.tag;

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

  const onCommentClickMediator = (data) => {
    // if (onCommentClick) onCommentClick(data);
    setPlaceholder(`回复 ${data.users.uname}`);
    setFocus(data.rid);
    // sendCommentReply(data.rid, comment).then((data) => {
    //   console.log(data)
    // }).catch((err) => {
    //   console.log(err);
    // })
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
      <ActionBar commentClick={commentClick} showDelete={showDelete} deleteClick={deleteMediator} initialVote={vote} />
      {showComment && (
        <>
          <Editor
            onChange={(e) => setComment(e.target.value)}
            onSubmit={() => {
              if (focus !== -1) {
                sendCommentReply(focus, comment).then(() => fetchComment(data.aid));
              } else {
                sendAnsReply(data.aid, comment).then(() => fetchComment(data.aid));
              }
            }}
            placeholder={placeholder}
          />
          <Comments dataSource={comments} onFocus={onCommentClickMediator} />
        </>
      )}
    </>
  );
};

Answer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Answer;
