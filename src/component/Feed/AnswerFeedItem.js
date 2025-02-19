import './AnswerFeedItem.sass';

import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import { ActionBar } from '../Bar';

const StoryItem = ({ data }) => {
  const author = data.author;
  const action = data.action;
  const title = data.title;
  const content = data.content;
  const link = data.link;

  return (
    <div className="story-item-container">
      <div className="story-item-content">
        <div className="feed-source">{author} 回答了问题</div>
        <div>
          <Link to={link}>
            <h2 className="feed-item-title">{title}</h2>
          </Link>
          <ReactMarkdown className="feed-item-content">{content}</ReactMarkdown>
          <div>
            {action === 1 && <ActionBar variant="question" />}
            {action !== 1 && <ActionBar />}
          </div>
        </div>
      </div>
    </div>
  );
};

StoryItem.propTypes = {
  data: PropTypes.any.isRequired,
};

export default StoryItem;
