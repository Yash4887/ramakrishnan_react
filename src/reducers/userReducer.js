const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return payload;

    default:
      return state;
  }
};
