import { get, post } from '../lib';
import { API_FOLLOW_CHECK, API_FOLLOW_LIST, API_FOLLOW_USER, API_UNFOLLOW_USER } from '../utils/constants';

export const follow = (uid) => {
  // TODO: get current user
  const me = 1;
  post(API_FOLLOW_USER + `?uid1=${me}&uid2=${uid}`);
};

export const unfollow = (uid) => {
  // TODO: get current user
  const me = 1;
  post(API_UNFOLLOW_USER + `?uid1=${me}&uid2=${uid}`);
};

export const checkFollowed = (uid1, uid2) => get(API_FOLLOW_CHECK, { uid1, uid2 });

export const checkIFollowed = (uid2) => {
  // TODO: get current user
  const me = 1;
  return get(API_FOLLOW_CHECK, { uid1: me, uid2 });
};

export const getFollowed = (myUid) => get(API_FOLLOW_LIST, { uid: myUid });
