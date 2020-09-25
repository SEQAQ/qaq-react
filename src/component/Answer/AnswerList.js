import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Answer from './AnswerItem';

const AnswerList = ({ dataSource }) => {
  const list = useMemo(() => [...dataSource], [dataSource]);
  return (
    <>
      {list &&
        list.length &&
        list.length > 0 &&
        list.map((ans, idx) => (
          <div style={{ padding: '16px 20px' }} key={idx}>
            <Answer data={ans} key={idx} />
          </div>
        ))}
    </>
  );
};

AnswerList.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default AnswerList;
