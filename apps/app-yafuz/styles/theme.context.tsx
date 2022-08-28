import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';

import GlobalStyle from './GlobalStyles';

export const ThemeGlobal: FC<any> = ({ children }: any) => {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};
