import './FeedItem.sass';

import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const StoryItem = ({ data }) => {
  const author = data.author;
  const action = data.action;
  const title = data.title;
  const content = data.content;
  const link = data.link;

  const actions = ['回答了', '提出了问题', '关注了问题'];
  // console.log(data);

  return (
    <div className="story-item-container">
      <div className="story-item-content">
        <div className="feed-source">
          {author} {actions[action]}
        </div>
        <div>
          <Link to={link}>
            <h2 className="feed-item-title">{title}</h2>
          </Link>
          <ReactMarkdown className="feed-item-content">{content}</ReactMarkdown>
          <div>
            {/* TODO */}
            {/* {action === 1 && <ActionBar variant="question" />} */}
            {/* {action !== 1 && <ActionBar />} */}
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
