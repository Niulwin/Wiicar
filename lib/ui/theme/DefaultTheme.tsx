import { createContext, FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, TDefaultTheme } from './themeSchema';
import { TDefaultThemeContext } from './types';

export const ThemeContext = createContext<TDefaultThemeContext>(
  {} as TDefaultThemeContext
);

const themes = {
  light: lightTheme,
  dark: darkTheme
};
export const DefaultTheme: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [theme, setTheme] = useState<TDefaultTheme>(() => {
    const lsTheme = localStorage.getItem('theme') || 'light';
    return themes[lsTheme as 'light' | 'dark'];
  });

  const changeTheme = () => {
    const keyTheme = theme?.key === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', keyTheme);
    setTheme(themes[keyTheme]);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default DefaultTheme;
