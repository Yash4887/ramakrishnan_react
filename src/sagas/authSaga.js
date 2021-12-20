import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* login({ payload, actions, addToken }) {
  try {
    const res = yield call(axiosInstance.post, 'signin', payload);
    yield call(addToken, res.data.accessToken);
    yield put({ type: 'LOGIN_SUCCESS', payload: res.data.user });
  } catch (error) {
    yield put({ type: 'LOGIN_FAIL', payload: error });
    actions.setFieldError('serverError', error.message);
  }
}

function* register({ payload }) {
  try {
    const res = yield call(axiosInstance.post, 'signup', payload);
    yield put({ type: 'REGISTER_SUCCESS', payload: res.data.user });
  } catch (error) {
    yield put({ type: 'REGISTER_FAIL', payload: error });
  }
}

function* loginRequest() {
  yield takeLatest('LOGIN_REQUEST', login);
}

function* registerRequest() {
  yield takeLatest('REGISTER_REQUEST', register);
}

export default function* rootAuth() {
  yield all([fork(loginRequest), fork(registerRequest)]);
}
