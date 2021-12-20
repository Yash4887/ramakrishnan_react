import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  const addToken = useCallback((accessToken) => {
    localStorage.setItem('token', accessToken);
    setToken(accessToken);
  }, []);

  const removeToken = useCallback(() => {
    localStorage.removeItem('token');
    setToken('');
  }, []);

  const value = useMemo(
    () => ({
      token,
      addToken,
      removeToken,
    }),
    [token, addToken, removeToken],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
