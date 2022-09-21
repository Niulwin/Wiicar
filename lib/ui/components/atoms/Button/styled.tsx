import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ButtonSize } from './types';

export const ContentButton = styled.button<{
  variant?: 'text' | 'contained' | 'outlined';
  background?: 'primary' | 'secondary' | 'error' | 'success' | 'info';
  size?: 'xs' | 'small' | 'normal' | 'large' | 'xl' | 'fullWidth' | 'auto';
  type?: 'submit' | 'button';
}>`
  user-select: none;
  display: flex;
  width: ${({ size }) => ButtonSize[size || 'auto']};
  height: auto;
  padding: 4px 8px;
  margin: 4px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant, theme, background }) =>
    variant === 'contained'
      ? theme.colors[background || 'primary'].main
      : 'transparent'};
  border-radius: 5px;
  cursor: pointer;
  border: ${({ variant, theme, background }) =>
    variant === 'outlined'
      ? `1px solid ${theme.colors[background || 'primary'].main}`
      : 'none'};
  &:hover {
    ${({ theme, background, variant }) =>
      variant === 'contained'
        ? `opacity: .8;`
        : `background-color: ${theme.colors[background || 'primary'].main}22;`};
  }
`;
export const Icon = styled(FontAwesomeIcon)<{
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'light'
    | 'error'
    | 'success'
    | 'info';
  isMargin?: boolean;
}>`
  color: ${({ color, theme }) => theme.colors.text[color || 'textPrimary']};
`;
