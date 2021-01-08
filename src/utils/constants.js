const API_ANS = '/answers';
const API_QUES = '/ques';
const API_REPLY = '/replies';
const API_UFQ = '/UFQ';
const API_USER = '/users';
const API_FOLLOW = '/followers';

export const API_ANS_GET = API_ANS + '/findByQid';
export const API_ANS_GET_WITH_VOTE = API_ANS + '/findByQidLogin';
export const API_ANS_GET_USER = API_ANS + '/findByUid';
export const API_ANS_NEW = API_ANS + '/addAnswer';
export const API_ANS_DEL = API_ANS + '/delete';

export const API_QUES_GET = API_QUES + '/findByQid';
export const API_QUES_GET_USER = API_QUES + '/findByUid';

export const API_QUES_IS_FOLLOWED = API_UFQ + '/isfollowed';
export const API_QUES_FOLLOW = API_UFQ + '/followSomeQues';
export const API_QUES_UNFOLLOW = API_UFQ + '/unfollowSomeQues';
export const API_QUES_GET_FOLLOWED = API_UFQ + '/findByUid';

export const API_QUES_NEW = API_QUES + '/new';
export const API_QUES_EDIT = API_QUES + '/editQues';
export const API_QUES_DEL = API_QUES + '/delQues';
export const API_QUES_CLOSE = API_QUES + '/closeQues';
export const API_QUES_OPEN = API_QUES + '/openQues';
export const API_REPLY_GET_ANS = API_REPLY + '/findRepliesForAnswer';
export const API_REPLY_SEND_ANS = API_REPLY + '/replyForAnswer';
export const API_REPLY_SEND_REPLY = API_REPLY + '/replyForReply';
export const API_USER_GET_ID = API_USER + '/findbyid';
export const API_FOLLOW_USER = API_FOLLOW + '/followSomeone';
export const API_UNFOLLOW_USER = API_FOLLOW + '/unfollowSomeone';
export const API_FOLLOW_CHECK = API_FOLLOW + '/check';
export const API_FOLLOW_LIST = API_FOLLOW + '/findFollowed';
