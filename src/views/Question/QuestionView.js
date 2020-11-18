import './QuestionView.scss';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SendButton } from '../../component';
import AnswerList from '../../component/Answer/AnswerList';
import { Card, QuestionCard } from '../../component/Card';
import MdEditor from '../../component/Editor/MdEditor';
import { answerQuestion, getAnswers, parseAnswerData } from '../../services/AnswerService';
import { getQuestion, parseQuestionData } from '../../services/QuestionService';
import { fetchAnsReplies } from '../../services/ReplyService';

const QuestionView = () => {
  const { id } = useParams();
  const [followed, setFollowed] = useState(false);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [showAnsEditor, setShowAnsEditor] = useState(false);
  const [ans, setAns] = useState('');

  useEffect(() => {
    setAnswers([
      { aid: 1, author: 'Author', dept: 'Computer Science', content: '因为人们问为什么\n' },
      { aid: 2, author: 'undefined!', dept: 'Software Enginering', content: '啊 这\n' },
    ]);
    getQuestion(id).then((data) => {
      const q = parseQuestionData(data);
      setQuestion(q);
    });
    getAnswers(id).then((data) => {
      const ans = data.map((e) => parseAnswerData(e));
      setAnswers(ans);
    });
    setFollowed(false);
  }, []);

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
      oldAnswers[index].comments = data;
      const updated = oldAnswers;
      setAnswers(updated);
    });
  };

  const submitAnswer = () => {
    answerQuestion(parseInt(id), ans);
  };

  return (
    <div>
      <Card style={{ width: '100vw' }}>
        <div style={{ display: 'flex', width: '1000px', margin: '0 auto' }}>
          <QuestionCard data={question} followed={followed} followHandler={(old) => setFollowed(!old)} answerHandler={onAns} />
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
