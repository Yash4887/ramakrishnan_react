import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      setToken(accessToken);
      // navigate('/main', { replace: true });
    }
  }, [navigate]);

  const addToken = useCallback(
    (accessToken) => {
      localStorage.setItem('token', accessToken);
      setToken(accessToken);
      navigate('/main', { replace: true });
    },
    [navigate],
  );

  const removeToken = useCallback(() => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/', { replace: true });
  }, [navigate]);

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
