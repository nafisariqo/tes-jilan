import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState({ name: 'Jilung' });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentUser, setCurrentUser }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
