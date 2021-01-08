import { get, post } from '../lib';
import { API_ANS_DEL, API_ANS_GET, API_ANS_GET_USER, API_ANS_NEW } from '../utils/constants';
import { getUser } from './userServices';

/**
 * convert backend data into frontend-friendly data
 * @param {object} data data returned by API
 */
export const parseAnswerData = (data) => {
  const detail = data.detail ? data.detail.mdText : undefined;
  const author = data.users ? data.users.uname : 'kimino namaewa~';
  const dept = data.users ? data.users.department : undefined;
  return { ...data, author, dept, detail };
};

/**
 * answer a question
 *
 * @param {number} qid Question ID
 * @param {string} ans content of the answer
 */
export const answerQuestion = (qid, ans) => {
  const user = getUser();
  return post(API_ANS_NEW, { qid, text: ans, uid: user.uid });
};

export const getAnswers = (qid) => get(API_ANS_GET, { qid });

export const getUserAnswer = (uid) => get(API_ANS_GET_USER, { uid });

export const deleteAnswer = (aid) => get(API_ANS_DEL, { aid }, true);
