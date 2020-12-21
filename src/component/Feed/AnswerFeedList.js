import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { AnswerItem } from './index';

const FeedList = ({ dataSource }) => {
  const list = useMemo(() => [...dataSource], [dataSource]);
  return <>{list && list.length && list.length > 0 && list.map((feed, idx) => <AnswerItem data={feed} key={idx} />)}</>;
};

FeedList.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default FeedList;
