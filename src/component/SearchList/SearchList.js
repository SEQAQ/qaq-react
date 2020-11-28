import PropTypes from 'prop-types';
import React from 'react';

import QuestionSearchCard from '../Card/QuestionSearchCard';
import UserSearchCard from '../Card/UserSearchCard';

export class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.dataSource;
    console.log('no4: ');
    console.log(list);
    const listType = this.props.type;
    console.log('no5: ' + listType);
    // if (!list) {
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
                    <QuestionSearchCard data={ans} key={idx} />
                  </div>
                );
              case 2:
                return (
                  <div style={{ padding: '16px 20px' }} key={idx}>
                    <UserSearchCard data={ans} key={idx} />
                  </div>
                );
              // case 3:
              //     return (
              //         <div style={{ padding: '16px 20px' }} key={idx}>
              //             <HotCard data={ans} key={idx} />
              //         </div>
              //     );
              default:
                return <span>List类型出错啦！</span>;
            }
          })}
      </div>
    );
    // }
    // else {return (<div>没有可用的结果哦</div>);}
  }
}

SearchList.propTypes = {
  dataSource: PropTypes.array.isRequired,
  type: PropTypes.number.isRequired,
};

export default SearchList;
