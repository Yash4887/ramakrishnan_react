const initialState = {};

export default (state = initialState, { type, loadingId }) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!matches) return state;
  const [, requestName, requestState] = matches;
  if (requestState === 'REQUEST') {
    if (loadingId) {
      return { ...state, [`${requestName}_${loadingId}`]: true };
    }
    return { ...state, [`${requestName}_${loadingId}`]: true };
  }
  if (loadingId) {
    const { [`${requestName}_${loadingId}`]: data, ...rest } = state;
    return rest;
  }
  const { [requestName]: data, ...rest } = state;
  return rest;
};
