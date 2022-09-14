import { createContext, FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { InitConfigTable } from '../components';
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

  // Only For Table
  useEffect(() => {
    InitConfigTable.configStyles({
      header: {
        fontSize: 14,
        textTransform: 'uppercase',
        colors: {
          font: theme.colors.text.textPrimary,
          hover: `${theme.colors.border.main}55`,
          active: theme.colors.border.main
        },
        rowHeight: 40,
        rowFilterHeight: 30,
        rowStyles: {
          border: 'none',
          margin: '4px 0',
          borderRadius: '0',
          backgroundColor: 'transparent'
        },
        rowFilterStyles: { border: 'none', margin: '4px 0' },
        cellStyles: { border: 'none' },
        cellContentStyles: { border: 'none' }
      },
      body: {
        fontSize: 13,
        fontFamily: 'Roboto',
        colors: {
          font: theme.colors.text.textPrimary,
          background: theme.colors.background.main,
          hover: theme.colors.primary.main
        },
        rowHeight: 55,
        rowStyles: {
          borderBottom: `1px solid ${theme.colors.border.main}`,
          display: 'flex',
          alignItems: 'center',
          color: theme.colors.text.textPrimary
        },
        rowContentStyles: {
          height: '50px',
          margin: '10px 0',
          color: theme.colors.text.textPrimary
        },
        cellStyles: { border: 'none', textAlign: 'center' }
      },
      footer: {
        footerStyleContainer: { styles: { border: 'none' } },
        footerStyleLeft: {
          styles: { color: theme.colors.text.textPrimary, fontSize: '12px' }
        },
        paginationStyle: {
          ul: { styles: { border: 'none' } },
          li: {
            styles: {
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              fontSize: '14px'
            },
            colors: {
              backgroundActive: theme.colors.secondary.main,
              background: theme.colors.secondary.main,
              hover: theme.colors.secondary.main
            }
          }
        }
      },
      loading: {
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Roboto-Medium'
      }
    });
  }, [theme.key]);
  // End

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default DefaultTheme;
