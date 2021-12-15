import { useSnackbar } from 'notistack';
import React, { createContext, useCallback, useEffect, useReducer } from 'react';
import axiosInstance from '../utils/axiosInstance';

export const ProductsContext = createContext();

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, loading: false, products: payload };

    case 'LOAD_PRODUCTS_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { enqueueSnackbar } = useSnackbar();
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const loadProductsData = useCallback(async () => {
    try {
      dispatch({ type: 'LOAD_PRODUCTS_REQUEST' });
      // throw new Error('Products are not avaiulable');
      const res = await axiosInstance.get('660/products');
      dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: res.data });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
      dispatch({ type: 'LOAD_PRODUCTS_FAIL', payload: err });
    }
  }, []);

  console.log(state);

  useEffect(() => {
    loadProductsData();
  }, [loadProductsData]);

  // const value = useMemo(() => state, [state]);

  return <ProductsContext.Provider value={state}>{children}</ProductsContext.Provider>;
};
