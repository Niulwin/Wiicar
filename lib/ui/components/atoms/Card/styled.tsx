import styled from 'styled-components';
import { CardHeightSize, CardWidthSize } from './types';

export const Section = styled.div<{
  variant?: 'text' | 'contained' | 'outlined';
  background?: 'primary' | 'secondary' | 'error' | 'success' | 'info';
  size?: 'xs' | 'small' | 'normal' | 'large' | 'xl' | 'fullWidth' | 'auto';
}>`
  display: flex;
  width: 100%;
  height: auto;
  padding: 16px;
  text-align: center;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  width: ${({ size }) => CardWidthSize[size || 'auto']};
  height: ${({ size }) => CardHeightSize[size || 'auto']};
  box-shadow: 0px 2px 16px rgb(20 9 51 / 15%);
  cursor: pointer;
  background-color: ${({ variant, theme, background }) =>
    variant === 'contained'
      ? theme.colors[background || 'primary'].main
      : 'transparent'};
  border-radius: 5px;
  border: ${({ variant, theme, background }) =>
    variant === 'outlined'
      ? `1px solid ${theme.colors[background || 'primary'].main}`
      : 'none'};
`;
