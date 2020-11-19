const API_ANS = '/answers';
const API_QUES = '/ques';
const API_REPLY = '/replies';

export const API_ANS_GET = API_ANS + '/findByQid';
export const API_ANS_NEW = API_ANS + '/addAnswer';
export const API_QUES_GET = API_QUES + '/findByQid';
export const API_QUES_NEW = API_QUES + '/new';
export const API_REPLY_GET_ANS = API_REPLY + '/findRepliesForAnswer';
export const API_REPLY_SEND_ANS = API_REPLY + '/replyForAnswer';
