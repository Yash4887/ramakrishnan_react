import axiosInstance from '../utils/axiosInstance';

export const loginAction = (values, actions, navigate, addToken) => async (dispatch) => {
  try {
    dispatch({ type: 'LOAD_USER_REQUEST' });
    const res = await axiosInstance.post('signin', values);
    addToken(res.data.accessToken);
    dispatch({ type: 'LOAD_USER_SUCCESS', payload: res.data.user });
    navigate('/main', { replace: true });
  } catch (error) {
    dispatch({ type: 'LOAD_USER_FAIL', payload: error });
    actions.setFieldError('serverError', error.message);
  }
};

export const registrationAction = (values, actions, navigate, addToken) => async (dispatch) => {
  try {
    dispatch({ type: 'LOAD_USER_REQUEST' });
    const res = await axiosInstance.post('signup', values);
    addToken(res.data.accessToken);
    dispatch({ type: 'LOAD_USER_SUCCESS', payload: res.data.user });
    navigate('/main', { replace: true });
  } catch (error) {
    dispatch({ type: 'LOAD_USER_FAIL', payload: error });
    actions.setFieldError('serverError', error.message);
  }
};

export const a = 1;
