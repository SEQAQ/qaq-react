import { get, post } from '../lib';
import { API_REPLY_GET_ANS, API_REPLY_SEND_ANS } from '../utils/constants';

export const fetchAnsReplies = (aid) => get(API_REPLY_GET_ANS, { aid });
// TODO: fix user info
export const sendAnsReply = (did, text) => post(API_REPLY_SEND_ANS, { uid: 1, did, text });
