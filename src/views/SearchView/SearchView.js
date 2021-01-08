import './SearchView.css';

import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { AnswerFeedList, FeedList, QAFeedList, UserFeedList } from '../../component/Feed';
import { get } from '../../lib';
import config from '../../utils/config';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SearchView = ({ match }) => {
  const [value, setValue] = useState(0);
  const { str } = match.params;
  const [feedList, setFeedList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const handleChange = (ev, newVal) => {
    setValue(newVal);
    onSearch(newVal);
  };

  useEffect(() => {
    setFeedList([
      { author: 'Author', action: 0, title: '什么是 Q∀Q?', content: '知乎，不行！\nQ∀Q 彳亍！\n' },
      { author: 'undefined!', action: 1, title: '宇宙的终极答案是什么？', content: '4 2\n' },
    ]);
    const searchString = str;
    let itemList = [];
    get(config.apiUrl + '/query/ques/title', { title: searchString }, true)
      .then((data) => {
        const itemData = data;
        // console.log('no1');
        // console.log(itemData);
        for (let i = 0; i < itemData.length; ++i) {
          const item = {
            title: itemData[i].title,
            detail: itemData[i].detail,
            qid: itemData[i].qid,
            user: itemData[i].users.uname,
            ctime: itemData[i].ctime,
            mtime: itemData[i].mtime,
          };
          itemList = [...itemList, item];
        }
        // console.log('no2');
        setResultList(itemList);
        // console.log(itemList);
      })
      .catch();
  }, []);

  function onSearch(i) {
    // const that = this;
    const searchString = str;
    let itemList = [];
    switch (i) {
      // 如果是搜索问题
      case 0:
        // axios({
        //   method: 'get',
        //   url: config.apiUrl + '/query/ques/title',
        //   header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   params: { title: searchString },
        // })
        get(config.apiUrl + '/query/ques/title', { title: searchString }, true)
          .then((data) => {
            const itemData = data;
            // console.log('no1');
            // console.log(itemData);
            for (let i = 0; i < itemData.length; ++i) {
              const item = {
                title: itemData[i].title,
                detail: itemData[i].detail,
                qid: itemData[i].qid,
                user: itemData[i].users.uname,
                ctime: itemData[i].ctime,
                mtime: itemData[i].mtime,
              };
              itemList = [...itemList, item];
            }
            // console.log('no2');
            setResultList(itemList);
            // console.log(itemList);
          })
          .catch();
        break;
      // 如果是搜索用户
      case 1:
        // axios({
        //   method: 'get',
        //   url: config.apiUrl + '/query/users',
        //   header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   params: { nickname: searchString },
        // })
        get(config.apiUrl + '/query/users', { nickname: searchString }, true)
          .then((data) => {
            const itemData = data;
            for (let i = 0; i < itemData.length; ++i) {
              const item = {
                account: itemData[i].account,
                uname: itemData[i].uname,
                followed: itemData[i].followed,
                follower: itemData[i].follower,
              };
              itemList = [...itemList, item];
            }
            // console.log('no22');
            setResultList(itemList);
            // console.log(itemList);
          })
          .catch();
        break;
    }
    // return <SearchList dataSource={itemList} type={i} />;
  }

  return (
    <div>
      <div className="profile-main">
        <div className="card profile-act">
          <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="问题" style={{ width: '10px' }} {...a11yProps(0)} />
            <Tab label="用户" {...a11yProps(1)} />
            <Tab label="回答" {...a11yProps(2)} />
            <Tab label="关注" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            {!resultList || resultList.length <= 0 ? <>{'未搜索到相关结果，请换一个关键词吧Q∀Q~'}</> : <QAFeedList dataSource={resultList} />}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {!resultList || resultList.length <= 0 ? <>{'未搜索到相关结果，请换一个关键词吧Q∀Q~'}</> : <UserFeedList dataSource={resultList} />}
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AnswerFeedList dataSource={feedList} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <FeedList dataSource={feedList} />
          </TabPanel>
        </div>
        <div className="profile-side">
          <div className="card">
            <div className="card-header">
              <div className="card-header-text">我的 QAQ</div>
            </div>
            <div className="side-stat-detail">
              <div className="side-stat-detail-item">
                <div className="side-icon">
                  <PersonIcon />
                </div>
                <span>关注了 114 个用户</span>
              </div>
              <div className="side-stat-detail-item">
                <div className="side-icon">
                  <VisibilityIcon />
                </div>
                <span>关注了 514 个问题</span>
              </div>
              <div className="side-stat-detail-item">
                <div className="side-icon">
                  <ThumbUpIcon />
                </div>
                <span>获得了 233 个赞同</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
