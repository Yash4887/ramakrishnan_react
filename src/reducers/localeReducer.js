const localeInitialState = 'en';

export default (state = localeInitialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_LOCALE':
      return payload;

    default:
      return state;
  }
};
