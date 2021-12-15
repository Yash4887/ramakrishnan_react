const localeInitialState = 'en';

export default (state = localeInitialState, { type, payload }) => {
  console.log('locale reducer');
  switch (type) {
    case 'CHANGE_LOCALE':
      return payload;

    default:
      return state;
  }
};
