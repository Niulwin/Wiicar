import { useContext } from 'react';
import { ThemeContext } from '../DefaultTheme';

export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return {
    theme,
    changeTheme
  };
};
