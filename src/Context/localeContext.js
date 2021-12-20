import React, { createContext, useState, memo, useMemo } from 'react';
import PropTypes from 'prop-types';

export const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('english');

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

LocaleProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default memo(LocaleProvider);
