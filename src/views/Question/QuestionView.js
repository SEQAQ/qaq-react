import './QuestionView.scss';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SendButton } from '../../component';
import AnswerList from '../../component/Answer/AnswerList';
import { Card, QuestionCard } from '../../component/Card';
import MdEditor from '../../component/Editor/MdEditor';
import { answerQuestion, getAnswers, parseAnswerData } from '../../services/AnswerService';
import { followQuestion, getQuestion, getQuestionFollowed, parseQuestionData, unfollowQuestion } from '../../services/QuestionService';
import { fetchAnsReplies, parseReply } from '../../services/ReplyService';

const QuestionView = () => {
  const { id } = useParams();
  const [followed, setFollowed] = useState(false);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [showAnsEditor, setShowAnsEditor] = useState(false);
  const [ans, setAns] = useState('');

  useEffect(() => {
    getQuestion(id).then((data) => {
      const q = parseQuestionData(data);
      setQuestion(q);
    });
    getAnswers(id).then((data) => {
      const ans = data.map((e) => parseAnswerData(e));
      setAnswers(ans);
    });
    getQuestionFollowed(id).then((data) => {
      if (data === 'Yes') {
        setFollowed(true);
      }
    });
  }, []);

  const toggleFollow = () => {
    if (followed) {
      unfollowQuestion(id);
    } else {
      followQuestion(id);
    }
    setFollowed(!followed);
  };

  const onAns = () => {
    setShowAnsEditor(!showAnsEditor);
  };

  const fetchComment = (answerId) => {
    const oldAnswers = answers;
    const index = oldAnswers.indexOf(oldAnswers.filter((e) => e.aid === answerId)[0]);
    if (index < 0) {
      return;
    }
    fetchAnsReplies(answerId).then((data) => {
      const comment = data.map((e) => parseReply(e));
      oldAnswers[index].comments = comment;
      const updated = oldAnswers;
      // make a copy of the array to trigger state transition
      setAnswers([...updated]);
    });
  };

  const submitAnswer = () => {
    answerQuestion(parseInt(id), ans);
  };

  return (
    <div>
      <Card style={{ width: '100vw' }}>
        <div style={{ display: 'flex', width: '1000px', margin: '0 auto' }}>
          <QuestionCard data={question} followed={followed} followHandler={toggleFollow} answerHandler={onAns} />
        </div>
      </Card>
      {showAnsEditor && (
        <Card id="answer-editor" className="main-editor">
          <MdEditor style={{ width: '100%' }} sourceChangeHandler={setAns} />
          <SendButton onClick={submitAnswer} />
        </Card>
      )}
      <div className="profile-main">
        <div className="card profile-act">
          <AnswerList dataSource={answers} fetchComment={fetchComment} />
        </div>
        <div className="profile-side">
          <div className="card">
            <div className="card-header">
              <div className="card-header-text">其它问题</div>
            </div>
            <div className="side-stat-detail"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionView;
