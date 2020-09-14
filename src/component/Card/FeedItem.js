import './FeedItem.sass';

import PropTypes from 'prop-types';
import React from 'react';

import { ActionBar } from '../Bar';

const StoryItem = ({ data }) => {
  const author = data.author;
  const action = data.action;
  const title = data.title;
  const content = data.content;

  const actions = ['赞同了回答', '提出了问题', '关注了问题'];

  return (
    <div className="story-item-container">
      <div className="story-item-content">
        <div className="feed-source">
          {author} {actions[action]}
        </div>
        <div>
          <h2 className="feed-item-title">{title}</h2>
          <p className="feed-item-content">{content}</p>
          <div>
            <ActionBar />
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
