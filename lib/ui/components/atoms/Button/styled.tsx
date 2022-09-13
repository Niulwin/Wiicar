import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const ContentButton = styled.div<{
  variant?: 'text' | 'contained' | 'outlined';
  background?: 'primary' | 'secondary';
}>`
  display: flex;
  width: auto;
  height: auto;
  padding: 4px 8px;
  margin: 4px;
  text-align: center;
  align-items: center;
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
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'light';
}>`
  color: ${({ color, theme }) => theme.colors.text[color || 'textPrimary']};
  margin-right: 5px;
`;
