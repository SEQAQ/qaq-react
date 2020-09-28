import './QuestionView.scss';

import React, { useEffect, useState } from 'react';

import AnswerList from '../../component/Answer/AnswerList';
import { Card, QuestionCard } from '../../component/Card';
import MdEditor from '../../component/Editor/Editor';

const QuestionView = () => {
  const [followed, setFollowed] = useState(false);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [showAnsEditor, setShowAnsEditor] = useState(true);

  useEffect(() => {
    setAnswers([
      { author: 'Author', dept: 'Computer Science', content: '因为人们问为什么\n' },
      { author: 'undefined!', dept: 'Software Enginering', content: '啊 这\n' },
    ]);
    setQuestion({ title: '为什么人们问为什么？' });
    setFollowed(false);
  }, []);

  const onAns = () => {
    setShowAnsEditor(!showAnsEditor);
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
          <MdEditor style={{ width: '100%' }} />
        </Card>
      )}
      <div className="profile-main">
        <div className="card profile-act">
          <AnswerList dataSource={answers} />
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
