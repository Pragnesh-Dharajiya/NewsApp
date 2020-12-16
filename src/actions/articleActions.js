import * as CONST from '../utils/Constants';

export function fetchPosts() {
  return {
    type: CONST.FETCH_NEWS,
  };
}

export function fetchPostsSuccess(articles) {
  return {
    type: CONST.FETCH_NEWS_SUCCESS,
    payload: {
      articles
    }
  };
}

export function fetchPostsFailure() {
  return {
    type: CONST.FETCH_NEWS_FAILURE,
  };
}