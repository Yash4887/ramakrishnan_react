const themeInitialState = 'light';

// update reducer only in immutable way
export default (state = themeInitialState, { type, payload }) => {
  switch (type) {
    case 'CHANGE_THEME':
      return payload;

    default:
      return state;
  }
};
