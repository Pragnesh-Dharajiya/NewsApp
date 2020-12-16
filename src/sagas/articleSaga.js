import {put, call, select} from 'redux-saga/effects';
import {fetchPostsSuccess, fetchPostsFailure} from '../actions/articleActions';
import {secureGet} from '../utils/SendJSON';

export function* fetchPostSaga() {
  try {
    const Data = yield call(
      secureGet,
      'top/about-country?skip=5&langs=en%2Chi%2Cpa&limit=10&country=us',
    );

    if (Data) {
      // let userNames = {};
      // userData.map((item) => {
      //   userNames[item.id] = item.username;
      // });
      yield put(fetchPostsSuccess(Data));
    } else {
      yield put(fetchPostsFailure());
    }
  } catch (error) {
    console.warn('error', error);
    yield put(fetchPostsFailure());
  }
}
