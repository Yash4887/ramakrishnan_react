import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* loadProducts() {
  try {
    const res = yield call(axiosInstance.get, '660/products');
    yield put({ type: 'LOAD_PRODUCTS_SUCCESS', payload: res.data });
  } catch (error) {
    yield put({ type: 'LOAD_PRODUCTS_SUCCESS', payload: error });
  }
}

function* loadProductRequest() {
  yield takeEvery('LOAD_PRODUCTS_REQUEST', loadProducts);
}

export default function* rootProducts() {
  yield all([fork(loadProductRequest)]);
}
