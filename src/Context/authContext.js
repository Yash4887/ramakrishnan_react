import React, { createContext, useEffect, useState } from 'react';
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

  const addToken = (accessToken) => {
    localStorage.setItem('token', accessToken);
    setToken(accessToken);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        addToken,
        removeToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
