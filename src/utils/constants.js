const API_ANS = '/answers';
const API_QUES = '/ques';
const API_REPLY = '/replies';
const API_UFQ = '/UFQ';
const API_USER = '/users';

export const API_ANS_GET = API_ANS + '/findByQid';
export const API_ANS_GET_USER = API_ANS + '/findByUid';
export const API_ANS_NEW = API_ANS + '/addAnswer';
export const API_QUES_GET = API_QUES + '/findByQid';
export const API_QUES_GET_USER = API_QUES + '/findByUid';
export const API_QUES_IS_FOLLOWED = API_UFQ + '/isfollowed';
export const API_QUES_FOLLOW = API_UFQ + '/followSomeQues';
export const API_QUES_UNFOLLOW = API_UFQ + '/unfollowSomeQues';
export const API_QUES_NEW = API_QUES + '/new';
export const API_REPLY_GET_ANS = API_REPLY + '/findRepliesForAnswer';
export const API_REPLY_SEND_ANS = API_REPLY + '/replyForAnswer';
export const API_USER_GET_ID = API_USER + '/findbyid';
