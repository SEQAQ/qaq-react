import { get, post } from '../lib';
import { API_QUES_FOLLOW, API_QUES_GET, API_QUES_GET_USER, API_QUES_IS_FOLLOWED, API_QUES_UNFOLLOW } from '../utils/constants';
import { getUser } from './userServices';

export const parseQuestionData = (data) => {
  const title = data.title;
  const detail = data.detail ? data.detail.detail : null;
  return { ...data, title, detail };
};

export const getQuestion = (qid) => get(API_QUES_GET, { qid });

export const getQuestionFollowed = (qid) => post(API_QUES_IS_FOLLOWED + `?uid=${getUser().uid}&qid=${qid}`);

export const followQuestion = (qid) => post(API_QUES_FOLLOW + `?uid=${getUser().uid}&qid=${qid}`);

export const unfollowQuestion = (qid) => post(API_QUES_UNFOLLOW + `?uid=${getUser().uid}&qid=${qid}`);

export const getUserQuestions = (uid) => get(API_QUES_GET_USER, { uid });
