import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const loadCartData = useCallback(async () => {
    try {
      const res = await axiosInstance.get('660/cart');
      setCart(res.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addToCart = useCallback(async (item) => {
    try {
      const res = await axiosInstance.post('660/cart', {
        productId: item.id,
        quantity: 1,
      });
      setCart((val) => [...val, res.data]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const updateQuantity = useCallback(
    async (index, quantity) => {
      try {
        const cartItem = cart[index];
        const res = await axiosInstance.put(`660/cart/${cartItem.id}`, {
          ...cartItem,
          quantity: cartItem.quantity + quantity,
        });
        setCart((val) => [...val.slice(0, index), res.data, ...val.slice(index + 1)]);
      } catch (error) {
        console.error(error);
      }
    },
    [cart],
  );

  const deleteFromCart = useCallback(async (id, index) => {
    try {
      await axiosInstance.delete(`660/cart/${id}`);
      setCart((val) => [...val.slice(0, index), ...val.slice(index + 1)]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadCartData();
  }, [loadCartData]);

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      updateQuantity,
      deleteFromCart,
    }),
    [cart, addToCart, updateQuantity, deleteFromCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
