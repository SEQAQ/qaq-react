import './FeedItem.sass';

import PropTypes from 'prop-types';
import React from 'react';

import { ActionBar } from '../Bar';

const QuestionItem = ({ data }) => {
  const author = data.author;
  const title = data.title;
  const content = data.content;

  return (
    <div className="story-item-container">
      <div className="story-item-content">
        <div>
          <h2 className="feed-item-title">{title}</h2>
          <p className="feed-item-content">
            {author} : {content}
          </p>
          <div>
            <ActionBar />
          </div>
        </div>
      </div>
    </div>
  );
};

QuestionItem.propTypes = {
  data: PropTypes.any.isRequired,
};

export default QuestionItem;
