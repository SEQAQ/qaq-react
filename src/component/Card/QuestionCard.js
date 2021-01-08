import './QuestionCard.sass';

import PropTypes from 'prop-types';
import React from 'react';
import Markdown from 'react-markdown';

import { QuestionActionBar } from '../Bar';
import Tag from '../Tag/Tag';

const QUES_CLOSE = 2;

const QuestionCard = ({ data, ...followProps }) => {
  const closed = data.status === QUES_CLOSE;
  return (
    <div className="QuestionCardContainer">
      {closed && <h1>该问题已关闭</h1>}
      <h1 className="question-title">{data.title}</h1>
      {data.tag && data.tag !== '' && <Tag tagString={data.tag}></Tag>}
      <Markdown>{data.detail}</Markdown>
      <QuestionActionBar {...followProps} status={data.status} />
    </div>
  );
};

QuestionCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default QuestionCard;
