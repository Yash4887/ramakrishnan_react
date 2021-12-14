import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const loadProductsData = useCallback(async () => {
    try {
      const res = await axiosInstance.get('660/products');
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadProductsData();
  }, [loadProductsData]);

  const value = useMemo(
    () => ({
      products,
    }),
    [products],
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
