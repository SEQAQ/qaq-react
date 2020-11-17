import './QuestionCard.sass';

import PropTypes from 'prop-types';
import React from 'react';

import { QuestoinActionBar } from '../Bar';

const QuestionCard = ({ data, ...followProps }) => (
  <div className="QuestionCardContainer">
    <h1 className="question-title">{data.title}</h1>
    <p>{data.detail}</p>
    <QuestoinActionBar {...followProps} />
  </div>
);

QuestionCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default QuestionCard;
