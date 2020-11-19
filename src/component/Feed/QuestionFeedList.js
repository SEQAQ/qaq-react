import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { QuestionItem } from './index';

const QuestionFeedList = ({ dataSource }) => {
  const list = useMemo(() => [...dataSource], [dataSource]);
  return <>{list && list.length && list.length > 0 && list.map((feed, idx) => <QuestionItem data={feed} key={idx} />)}</>;
};

QuestionFeedList.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default QuestionFeedList;
