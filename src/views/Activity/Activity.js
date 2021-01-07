import './Activity.css';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FeedList } from '../../component/Feed';
import ProfileHeader from '../../component/Profile/ProfileHeader';
import { getUserAnswer } from '../../services/AnswerService';
import { checkIFollowed, follow, getFollowed, unfollow } from '../../services/FollowService';
import { getUserQuestions } from '../../services/QuestionService';
import { fetchUser } from '../../services/userServices';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <> {children}</>}
    </div>
  );
}

const Activity = () => {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const [user, setUser] = useState({ gender: 0 });
  // const [feedList, setFeedList] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [followed, setFollowed] = useState(false);
  const [followList, setFollowList] = useState([]);
  const handleChange = (ev, newVal) => setValue(newVal);

  useEffect(() => {
    fetchUser(id).then((data) => {
      setUser({ ...data, username: data.uname, gender: data.sex, followed: followed });
    });
    getUserAnswer(id).then((data) => {
      const answerList = data.map((e) => ({ ...e, action: 0, title: e.questions.title, content: e.detail.mdText, link: `/question/${e.questions.qid}` }));
      setAnswers(answerList);
    });
    getUserQuestions(id).then((data) => {
      const questionsList = data.map((e) => ({ ...e, action: 1, content: e.detail ? e.detail.detail : '没有详情', link: `/question/${e.qid}` }));
      setQuestions(questionsList);
    });
    getFollowed(id).then((data) => setFollowList(data));
    checkIFollowed(id).then((e) => setFollowed(e));
  }, []);

  const onFollow = () => {
    if (followed) {
      unfollow(id);
    } else {
      follow(id);
    }
    setFollowed(!followed);
    const newData = { ...user };
    newData.followed = !followed;
    setUser(newData);
  };

  return (
    <div>
      <ProfileHeader data={user} onFollow={onFollow} followed={followed} />
      <div className="profile-main">
        <div className="card profile-act">
          <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
            {/* <Tab label="动态" style={{ width: '10px' }} /> */}
            <Tab label="回答" />
            <Tab label="问题" />
            <Tab label="关注" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <FeedList dataSource={answers} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FeedList dataSource={questions} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <List dense={false}>
              {followList.map((e, idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={e.users2.uname} />
                </ListItem>
              ))}
            </List>
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

export default Activity;
