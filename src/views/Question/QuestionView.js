import './QuestionView.scss';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SendButton } from '../../component';
import AnswerList from '../../component/Answer/AnswerList';
import { Card, QuestionCard } from '../../component/Card';
import MdEditor from '../../component/Editor/MdEditor';
import { userInfo } from '../../lib';
import { answerQuestion, deleteAnswer, getAnswers, getAnswersWithVote, parseAnswerData } from '../../services/AnswerService';
import { closeQuestion, deleteQuestion, followQuestion, getQuestion, getQuestionFollowed, openQuestion, parseQuestionData, unfollowQuestion } from '../../services/QuestionService';
import { fetchAnsReplies, parseReply } from '../../services/ReplyService';
import AskView from '../Ask/AskView';

const QUES_CLOSE = 2;

const QuestionView = () => {
  const { id } = useParams();
  const [followed, setFollowed] = useState(false);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [showAnsEditor, setShowAnsEditor] = useState(false);
  const [ans, setAns] = useState('');
  const [editing, setEditing] = useState(false);
  const user = userInfo();
  // const getAnswersFunctor = user ? getAnswersWithVote : getAnswers;
  const isAsker = user && question && user.uid === question.uid;

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [severity, setSeverity] = useState('warning');

  useEffect(() => {
    getQuestion(id).then((data) => {
      const q = parseQuestionData(data);
      setQuestion(q);
    });
    if (user) {
      getAnswersWithVote(id).then((data) => {
        const ans = data
          .map((e) => ({ ...e.answers, tag: e.tag }))
          .map((e) => parseAnswerData(e))
          .filter((e) => e.status !== -1);
        setAnswers(ans);
      });
    } else {
      getAnswers(id).then((data) => {
        const ans = data.map((e) => parseAnswerData(e)).filter((e) => e.status !== -1);
        setAnswers(ans);
      });
    }
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
    // console.log(question);
    if (question.status === QUES_CLOSE) {
      setMsg('问题已关闭');
      setOpen(true);
      return;
    }
    answerQuestion(parseInt(id), ans);
  };

  const editQuestion = () => {
    setEditing(!editing);
  };

  const closeQuestionHandler = () => {
    closeQuestion(id)
      .then(() => {
        setMsg('已关闭');
        setSeverity('success');
        setOpen(true);
      })
      .catch(() => {
        setMsg('关闭失败');
        setOpen(true);
      });
  };

  const openQuestionhandler = () => {
    openQuestion(id)
      .then(() => {
        setMsg('已打开');
        setSeverity('success');
        setOpen(true);
      })
      .catch(() => {
        setMsg('打开失败');
        setOpen(true);
      });
  };

  const deleteQuestionHandler = () => {
    deleteQuestion(id)
      .then(() => {
        setMsg('已删除');
        setSeverity('success');
        setOpen(true);
      })
      .catch(() => {
        setMsg('删除失败');
        setOpen(true);
      });
  };

  const snackbarClose = () => {
    setOpen(false);
  };

  const delAnswer = (aid) => {
    deleteAnswer(aid)
      .then(() => {
        setMsg('已删除');
        setSeverity('success');
        setOpen(true);
      })
      .catch(() => {
        setMsg('删除失败');
        setOpen(true);
      });
  };

  return (
    <div>
      <Card style={{ width: '100vw' }}>
        <div style={{ display: 'flex', width: '1000px', margin: '0 auto' }}>
          <QuestionCard
            data={question}
            followed={followed}
            followHandler={toggleFollow}
            answerHandler={onAns}
            isAsker={isAsker}
            editHandler={editQuestion}
            closeHandler={closeQuestionHandler}
            openHandler={openQuestionhandler}
            deleteHandler={deleteQuestionHandler}
          />
        </div>
      </Card>
      {editing && question && <AskView initialTitle={question.title} initialMdSource={question.detail} editMode={true} qid={id} />}
      {showAnsEditor && (
        <Card id="answer-editor" className="main-editor">
          <MdEditor style={{ width: '100%' }} sourceChangeHandler={setAns} />
          <SendButton onClick={submitAnswer} />
        </Card>
      )}
      <div className="profile-main">
        <div className="card profile-act">
          <AnswerList dataSource={answers} fetchComment={fetchComment} showDelete={isAsker} onDelete={delAnswer} />
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
      <Snackbar open={open} autoHideDuration={2000} onClose={snackbarClose}>
        <MuiAlert onClose={snackbarClose} severity={severity}>
          {msg}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default QuestionView;
