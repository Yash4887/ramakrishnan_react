const initialState = {
  loading: false,
  error: null,
  data: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_USER_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_USER_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'LOAD_USER_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
