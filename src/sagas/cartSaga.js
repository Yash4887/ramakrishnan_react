import { all, fork, takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* loadCart() {
  try {
    const res = yield call(axiosInstance.get, '660/cart');
    yield put({ type: 'LOAD_CART_SUCCESS', payload: res.data });
  } catch (error) {
    yield put({ type: 'LOAD_CART_FAIL', payload: error });
  }
}

function* addCartItem({ payload, loadingId }) {
  try {
    const res = yield call(axiosInstance.post, '660/cart', {
      productId: payload.id,
      quantity: 1,
    });
    yield put({ type: 'ADD_CART_ITEM_SUCCESS', payload: res.data, loadingId });
  } catch (error) {
    yield put({ type: 'ADD_CART_ITEM_FAIL', payload: error, loadingId });
  }
}

function* updateCartItem({ payload }) {
  try {
    const res = yield call(axiosInstance.put, `660/cart/${payload.id}`, {
      ...payload,
      quantity: payload.quantity,
    });
    yield put({ type: 'UPDATE_CART_ITEM_SUCCESS', payload: res.data, loadingId: payload.id });
  } catch (error) {
    yield put({ type: 'UPDATE_CART_ITEM_FAIL', payload: error, loadingId: payload.id });
  }
}

function* deleteCartItem({ payload }) {
  try {
    yield call(axiosInstance.delete, `660/cart/${payload.id}`);
    yield put({ type: 'DELETE_CART_ITEM_SUCCESS', payload, loadingId: payload.id });
  } catch (error) {
    yield put({ type: 'DELETE_CART_ITEM_FAIL', payload: error, loadingId: payload.id });
  }
}

function* loadCartRequest() {
  yield takeEvery('LOAD_CART_REQUEST', loadCart);
}

function* addCartItemRequest() {
  yield takeLatest('ADD_CART_ITEM_REQUEST', addCartItem);
}

function* updateCartItemRequest() {
  yield takeLatest('UPDATE_CART_ITEM_REQUEST', updateCartItem);
}

function* deleteCartItemRequest() {
  yield takeLatest('DELETE_CART_ITEM_REQUEST', deleteCartItem);
}

export default function* rootProducts() {
  yield all([
    fork(loadCartRequest),
    fork(addCartItemRequest),
    fork(updateCartItemRequest),
    fork(deleteCartItemRequest),
  ]);
}
