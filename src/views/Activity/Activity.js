import React, { useState } from 'react';
import ProfileHeader from '../../component/ProfileHeader/ProfileHeader';
import './Activity.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Activity = () => {
  const [value, setValue] = useState(0);
  const handleChange = (ev, newVal) => setValue(newVal);

  return (
    <div>
      <div style={{ float: 'left', top: '10px', position: 'fixed', zIndex: 100 }}>{new Date().toLocaleString()}</div>
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
