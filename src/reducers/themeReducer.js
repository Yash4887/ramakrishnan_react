const themeInitialState = 'dark';

// update reducer only in immutable way
export default (state = themeInitialState, { type, payload }) => {
  console.log('theme reducer');
  switch (type) {
    case 'CHANGE_THEME':
      return payload;

    default:
      return state;
  }
};
