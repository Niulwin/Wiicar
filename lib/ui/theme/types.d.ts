import { TColors, TDefaultTheme } from './themeSchema';

export type TDefaultThemeContext = {
  theme?: TDefaultTheme;
  changeTheme: () => void;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    key: 'light' | 'dark';
    colors: TColors;
  }
}
