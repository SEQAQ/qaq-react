import { post } from '../lib';
import { API_ANS_NEW } from '../utils/constants';
import { getUser } from './userServices';

/**
 * answer a question
 *
 * @param {number} qid Question ID
 * @param {string} ans content of the answer
 */
export const answerQuestion = (qid, ans) => {
  const user = getUser();
  post(API_ANS_NEW, { qid, text: ans, uid: user.uid });
};
