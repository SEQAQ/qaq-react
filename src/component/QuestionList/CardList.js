import PropTypes from 'prop-types';
import React from 'react';

import FriendCard from '../Card/FriendCard';
import HotCard from '../Card/HotCard';
import RecommendCard from '../Card/RecommendCard';

export class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.dataSource;
    const listType = this.props.type;
    return (
      <div>
        {list &&
          list.length &&
          list.length > 0 &&
          list.map((ans, idx) => {
            switch (listType) {
              case 1:
                return (
                  <div style={{ padding: '16px 20px' }} key={idx}>
                    <RecommendCard data={ans} key={idx} />
                  </div>
                );
              case 2:
                return (
                  <div style={{ padding: '16px 20px' }} key={idx}>
                    <FriendCard data={ans} key={idx} />
                  </div>
                );
              case 3:
                return (
                  <div style={{ padding: '16px 20px' }} key={idx}>
                    <HotCard data={ans} key={idx} />
                  </div>
                );
              default:
                return <span>List类型出错啦！</span>;
            }
          })}
      </div>
    );
  }
}

CardList.propTypes = {
  dataSource: PropTypes.array.isRequired,
  type: PropTypes.number.isRequired,
};

export default CardList;
