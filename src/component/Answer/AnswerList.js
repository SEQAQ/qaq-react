import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Answer from './AnswerItem';

const AnswerList = ({ dataSource, fetchComment }) => {
  const list = useMemo(() => [...dataSource], [dataSource]);
  return (
    <>
      {list &&
        list.length &&
        list.length > 0 &&
        list.map((ans, idx) => (
          <div style={{ padding: '16px 20px' }} key={idx}>
            <Answer data={ans} key={idx} fetchComment={fetchComment} />
          </div>
        ))}
    </>
  );
};

AnswerList.propTypes = {
  dataSource: PropTypes.array.isRequired,
  fetchComment: PropTypes.func.isRequired,
};

export default AnswerList;
