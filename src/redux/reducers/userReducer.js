import {USER_DATA} from '../actions/actionType';

const initialState = {
  userData: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
