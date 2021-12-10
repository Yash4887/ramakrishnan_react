import React, { createContext, useState, memo } from 'react';

export const LocaleContext = createContext();

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('english');

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default memo(LocaleProvider);
