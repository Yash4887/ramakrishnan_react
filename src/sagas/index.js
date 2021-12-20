import { all, fork } from 'redux-saga/effects';
import productsSaga from './productsSaga';
import cartSaga from './cartSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield all([fork(productsSaga), fork(cartSaga), fork(authSaga)]);
}
