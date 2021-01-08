import { get, post, userInfo } from '../lib';
import { API_REPLY_GET_ANS, API_REPLY_SEND_ANS } from '../utils/constants';

export const parseReply = (data) => {
  const content = data.content ? data.content.content : undefined;
  const name = data.users ? data.users.uname : undefined;
  return { ...data, content, name };
};

export const fetchAnsReplies = (aid) => get(API_REPLY_GET_ANS, { aid });

export const sendAnsReply = (did, text) => post(API_REPLY_SEND_ANS, { uid: userInfo() ? userInfo().uid : undefined, did, text }, true);
