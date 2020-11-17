import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import QuestionCard from '../QuestionCard2/HomeViewQuestonCard';

const QuestionList = ({ dataSource }) => {
  const list = useMemo(() => [...dataSource], [dataSource]);
  return (
    <>
      {list &&
        list.length &&
        list.length > 0 &&
        list.map((ans, idx) => (
          <div style={{ padding: '16px 20px' }} key={idx}>
            <QuestionCard data={ans} key={idx} />
          </div>
        ))}
    </>
  );
};

QuestionList.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default QuestionList;
