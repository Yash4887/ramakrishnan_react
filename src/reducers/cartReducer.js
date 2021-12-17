const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_CART_REQUEST':
    case 'ADD_CART_ITEM_REQUEST':
    case 'UPDATE_CART_ITEM_REQUEST':
    case 'DELETE_CART_ITEM_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_CART_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'ADD_CART_ITEM_SUCCESS':
      return { ...state, loading: false, data: [...state.data, payload] };

    case 'UPDATE_CART_ITEM_SUCCESS': {
      const index = state.data.findIndex((x) => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), payload, ...state.data.slice(index + 1)],
      };
    }

    case 'DELETE_CART_ITEM_SUCCESS': {
      const index = state.data.findIndex((x) => x.id === payload.id);
      return {
        ...state,
        loading: false,
        data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
      };
    }

    case 'LOAD_CART_FAIL':
    case 'ADD_CART_ITEM_FAIL':
    case 'UPDATE_CART_ITEM_FAIL':
    case 'DELETE_CART_ITEM_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
