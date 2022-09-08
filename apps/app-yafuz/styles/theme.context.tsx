import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';

export const ThemeGlobal: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};
