import {USER_DATA} from '../actions/actionType';

export const user_data = (data) => {
  return async (dispatch) => {
    dispatch({
      type: USER_DATA,
      payload: data,
    });
  };
};
