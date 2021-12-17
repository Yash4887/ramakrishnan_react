import axiosInstance from '../utils/axiosInstance';

export const loadCartAction = () => async (dispatch) => {
  try {
    dispatch({ type: 'LOAD_CART_REQUEST' });
    const res = await axiosInstance.get('660/cart');
    // throw new Error('hello some thing wrong..');
    dispatch({ type: 'LOAD_CART_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOAD_CART_FAIL', payload: error });
  }
};

export const addCartItemAction = (item) => async (dispatch) => {
  try {
    dispatch({ type: 'ADD_CART_ITEM_REQUEST' });
    const res = await axiosInstance.post('660/cart', {
      productId: item.id,
      quantity: 1,
    });
    dispatch({ type: 'ADD_CART_ITEM_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ADD_CART_ITEM_FAIL', payload: error });
  }
};

export const updateCartItemAction = (cartItem, quantity) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_CART_ITEM_REQUEST' });
    const res = await axiosInstance.put(`660/cart/${cartItem.id}`, {
      ...cartItem,
      quantity: cartItem.quantity + quantity,
    });
    dispatch({ type: 'UPDATE_CART_ITEM_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_CART_ITEM_FAIL', error });
  }
};

export const deleteCartItemAction = (cartItem) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_CART_ITEM_REQUEST' });
    await axiosInstance.delete(`660/cart/${cartItem.id}`);
    dispatch({ type: 'DELETE_CART_ITEM_SUCCESS', payload: cartItem });
  } catch (error) {
    dispatch({ type: 'DELETE_CART_ITEM_FAIL', payload: error });
  }
};
