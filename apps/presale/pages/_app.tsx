import { colors, createTheme, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from 'core';
import type { AppProps } from 'next/app';

const theme = createTheme({
  palette: {
    primary: colors.orange
  }
});

export default function AppYafuz({
  Component,
  pageProps
}: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
