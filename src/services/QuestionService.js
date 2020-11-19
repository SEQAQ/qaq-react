import { get } from '../lib';
import { API_QUES_GET, API_QUES_GET_USER } from '../utils/constants';

export const parseQuestionData = (data) => {
  const title = data.title;
  const detail = data.detail ? data.detail.detail : null;
  return { ...data, title, detail };
};

export const getQuestion = (qid) => get(API_QUES_GET, { qid });

export const getUserQuestions = (uid) => get(API_QUES_GET_USER, { uid });
