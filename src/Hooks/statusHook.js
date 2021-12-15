import { useSnackbar } from 'notistack';
import { useState } from 'react';

const useStatus = () => {
  const [state, setState] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const setLoading = ({ requestType, cartId = -1, productId = -1 }) => {
    setState((val) => {
      const index = val.findIndex(
        (x) => x.type === requestType && x.cartId === cartId && x.productId === productId,
      );
      const data = {
        type: requestType,
        status: 'REQUEST',
        cartId,
        productId,
      };

      if (index === -1) {
        return [...val, data];
      }
      return [...val.slice(0, index), data, ...val.slice(index + 1)];
    });
  };

  const setSuccess = ({ requestType, cartId = -1, productId = -1 }) => {
    setState((val) =>
      val.filter(
        (x) => !(x.type === requestType && x.cartId === cartId && x.productId === productId),
      ),
    );
  };

  const setError = ({ requestType, payload, cartId = -1, productId = -1 }) => {
    setState((val) =>
      val.map((x) => {
        if (x.type === requestType && x.cartId === cartId && x.productId === productId) {
          return { ...x, status: 'ERROR', payload };
        }
        return x;
      }),
    );
    enqueueSnackbar(payload.message, { variant: 'error' });
  };

  return {
    state,
    setLoading,
    setSuccess,
    setError,
  };
};

export default useStatus;
