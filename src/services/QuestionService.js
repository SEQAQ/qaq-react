import { get } from '../lib';
import { API_QUES_GET } from '../utils/constants';

export const parseQuestionData = (data) => {
  const title = data.title;
  const detail = data.detail ? data.detail.detail : null;
  return { ...data, title, detail };
};

export const getQuestion = (qid) => get(API_QUES_GET, { qid });
