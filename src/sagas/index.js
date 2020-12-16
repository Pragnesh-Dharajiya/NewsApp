import {takeLatest, all} from 'redux-saga/effects';
import {fetchPostSaga} from './articleSaga';
import * as CONST from '../utils/Constants';

export default function* root() {
  yield all([takeLatest(CONST.FETCH_NEWS, fetchPostSaga)]);
}
