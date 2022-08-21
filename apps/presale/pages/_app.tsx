import { colors, createTheme, ThemeProvider } from '@mui/material';
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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
