import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Answer from './AnswerItem';

const AnswerList = ({ dataSource, fetchComment }) => {
  const list = useMemo(() => [...dataSource], [dataSource]);
  if (!list || !list.length || list.length <= 0) {
    return <p>这里是知识的荒漠</p>;
  }
  return (
    <div>
      {list.map((ans, idx) => (
        <div style={{ padding: '16px 20px' }} key={idx}>
          <Answer data={ans} key={idx} fetchComment={fetchComment} />
        </div>
      ))}
    </div>
  );
};

AnswerList.propTypes = {
  dataSource: PropTypes.array.isRequired,
  fetchComment: PropTypes.func.isRequired,
};

export default AnswerList;
