import './Activity.css';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React, { useEffect, useState } from 'react';

import { FeedList } from '../../component/Feed';
import ProfileHeader from '../../component/Profile/ProfileHeader';
import { getUserAnswer } from '../../services/AnswerService';
import { getUserQuestions } from '../../services/QuestionService';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <> {children}</>}
    </div>
  );
}

const Activity = () => {
  const [value, setValue] = useState(0);
  // const [user, setUser] = useState({});
  // const [feedList, setFeedList] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const handleChange = (ev, newVal) => setValue(newVal);

  useEffect(() => {
    // TODO: fix uid
    getUserAnswer(1).then((data) => {
      const answerList = data.map((e) => ({ ...e, action: 0, title: e.questions.title, content: e.detail.mdText, link: `/question/${e.questions.qid}` }));
      setAnswers(answerList);
    });
    getUserQuestions(1).then((data) => {
      const questionsList = data.map((e) => ({ ...e, action: 1, content: e.detail ? e.detail.detail : '没有详情', link: `/question/${e.qid}` }));
      setQuestions(questionsList);
    });
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
            {/* <Tab label="动态" style={{ width: '10px' }} /> */}
            <Tab label="回答" />
            <Tab label="问题" />
            {/* TODO: uncomment this and implement it */}
            {/* <Tab label="关注" /> */}
          </Tabs>
          <TabPanel value={value} index={0}>
            <FeedList dataSource={answers} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FeedList dataSource={questions} />
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
