import { get, post } from '../lib';
import {
  API_HOT_GET,
  API_QUES_CLOSE,
  API_QUES_DEL,
  API_QUES_FINDALL,
  API_QUES_FOLLOW,
  API_QUES_GET,
  API_QUES_GET_FOLLOWED,
  API_QUES_GET_USER,
  API_QUES_IS_FOLLOWED,
  API_QUES_OPEN,
  API_QUES_RECOM,
  API_QUES_UNFOLLOW,
} from '../utils/constants';
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

export const getAllQuestions = () => get(API_QUES_FINDALL);

export const getRecomQues = (uid) => get(API_QUES_RECOM, { uid });

export const getHotQues = (option) => get(API_HOT_GET, { option });

// export const banQues = (qid) => post(API_QUES_BAN, {qid});

export const getUserFollowedQuestions = (uid) => get(API_QUES_GET_FOLLOWED, { uid });

export const closeQuestion = (qid) => get(API_QUES_CLOSE, { qid }, true);

export const openQuestion = (qid) => get(API_QUES_OPEN, { qid }, true);

export const deleteQuestion = (qid) => get(API_QUES_DEL, { qid }, true);
