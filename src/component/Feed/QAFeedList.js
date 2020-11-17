import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { QAItem } from './index';

const QAFeedList = ({ dataSource }) => {
  const list = useMemo(() => [...dataSource], [dataSource]);
  return <>{list && list.length && list.length > 0 && list.map((feed, idx) => <QAItem data={feed} key={idx} />)}</>;
};

QAFeedList.propTypes = {
  dataSource: PropTypes.array.isRequired,
};

export default QAFeedList;
