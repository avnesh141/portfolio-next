// ThemeContext.js
import React, { createContext, useState, useContext, useMemo } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const theme = useMemo(() => ({
    darkMode,
    toggleTheme
  }), [darkMode]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);