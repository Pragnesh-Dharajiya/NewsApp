import * as CONST from '../utils/Constants';

const initialState = {
  articles: [],
  // userNames: {},
  isFetching: false,
  //   commentData: [],
  //   isFetchingComments: false,
  //   isPostDeleted: false,
};

// This reducer stores the status of email verification.
export default function StartUpReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.FETCH_NEWS:
      return {
        ...state,
        articles: [],
        isFetching: true,
      };
    case CONST.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        isFetching: false,
      };
    case CONST.FETCH_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
