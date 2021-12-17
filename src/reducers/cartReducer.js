const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_CART_SUCCESS':
      return payload;

    case 'ADD_CART_ITEM_SUCCESS':
      return [...state, payload];

    case 'UPDATE_CART_ITEM_SUCCESS': {
      const index = state.findIndex((x) => x.id === payload.id);
      return [...state.slice(0, index), payload, ...state.slice(index + 1)];
    }

    case 'DELETE_CART_ITEM_SUCCESS': {
      const index = state.findIndex((x) => x.id === payload.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
