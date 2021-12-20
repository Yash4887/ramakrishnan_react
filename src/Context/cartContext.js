import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useStatus from '../Hooks/statusHook';
import axiosInstance from '../utils/axiosInstance';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { state: cartState, setLoading, setSuccess, setError } = useStatus();

  const loadCartData = useCallback(async () => {
    const requestType = 'LOAD_CART';
    try {
      setLoading({ requestType });
      const res = await axiosInstance.get('660/cart');
      setCart(res.data);
      setSuccess({ requestType });
    } catch (error) {
      setError({ requestType, payload: error });
    }
  }, []);

  const addToCart = useCallback(async (item) => {
    const requestType = 'ADD_CART';
    try {
      setLoading({ requestType, productId: item.id });
      // throw new Error('Api fail');
      const res = await axiosInstance.post('660/cart', {
        productId: item.id,
        quantity: 1,
      });
      setCart((val) => [...val, res.data]);
      setSuccess({ requestType, productId: item.id });
    } catch (error) {
      setError({ requestType, productId: item.id, payload: error });
    }
  }, []);

  const updateQuantity = useCallback(
    async (index, quantity) => {
      const requestType = 'UPDATE_CART';
      const cartItem = cart[index];
      try {
        setLoading({ requestType, cartId: cartItem.id, productId: cartItem.productId });
        const res = await axiosInstance.put(`660/cart/${cartItem.id}`, {
          ...cartItem,
          quantity: cartItem.quantity + quantity,
        });
        setCart((val) => [...val.slice(0, index), res.data, ...val.slice(index + 1)]);
        setSuccess({ requestType, cartId: cartItem.id, productId: cartItem.productId });
      } catch (error) {
        console.error(error);
        setError({
          requestType,
          payload: error,
          cartId: cartItem.id,
          productId: cartItem.productId,
        });
      }
    },
    [cart],
  );

  const deleteFromCart = useCallback(async (id, index) => {
    const requestType = 'DELETE_CART';
    try {
      setLoading({ requestType, cartId: id });
      await axiosInstance.delete(`660/cart/${id}`);
      setCart((val) => [...val.slice(0, index), ...val.slice(index + 1)]);
      setSuccess({ requestType, cartId: id });
    } catch (error) {
      setError({ requestType, payload: error, cartId: id });
    }
  }, []);

  useEffect(() => {
    loadCartData();
  }, [loadCartData]);

  const value = useMemo(
    () => ({
      cart,
      cartState,
      addToCart,
      updateQuantity,
      deleteFromCart,
    }),
    [cart, cartState, addToCart, updateQuantity, deleteFromCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
