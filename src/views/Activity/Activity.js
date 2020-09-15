import './Activity.css';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React, { useEffect, useState } from 'react';

import { FeedList } from '../../component/Feed';
import ProfileHeader from '../../component/Profile/ProfileHeader';

const Activity = () => {
  const [value, setValue] = useState(0);
  const [feedList, setFeedList] = useState([]);
  const handleChange = (ev, newVal) => setValue(newVal);

  useEffect(() => {
    setFeedList([
      { author: 'Author', action: 0, title: '什么是 QAQ?', content: '知乎，不行！\nQAQ 彳亍！\n' },
      { author: 'undefined!', action: 1, title: '宇宙的终极答案是什么？', content: '4 2\n' },
    ]);
  }, []);

  return (
    <div>
      <ProfileHeader
        data={{
          username: 'QAQ 小编',
          gender: 1,
          img: 'https://avatars1.githubusercontent.com/u/71007591',
          intro: '哦！我向上帝发誓，我什么也不知道。我打赌，我会把QAQ问到倒闭！看在玛丽亚的份上，请回答我的问题吧！',
        }}
      />
      <div className="profile-main">
        <div className="card profile-act">
          <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="动态" style={{ width: '10px' }} />
            <Tab label="回答" />
            <Tab label="问题" />
            <Tab label="关注" />
          </Tabs>
          <FeedList dataSource={feedList} />
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

export default Activity;
