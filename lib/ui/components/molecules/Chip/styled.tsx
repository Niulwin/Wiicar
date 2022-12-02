import styled from 'styled-components';
import { ChipSize, TChipProps } from './types';

type TContainerStyle = Pick<TChipProps, 'variant' | 'background' | 'size'>;

export const ChipContainer = styled.div<TContainerStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  font-size: 16px;
  margin-right: 0.5rem;
  border-radius: 20px;
  width: ${({ size }) => ChipSize[size || 'xs']};
  min-width: ${({ size }) => ChipSize[size || 'xs']};
  max-width: ${({ size }) => ChipSize[size || 'xs']};
  max-height: ${({ size }) => ChipSize[size || 'xs']};
  background-color: ${({ variant, theme, background }) =>
    variant === 'contained'
      ? theme.colors[background || 'primary'].main + '2A'
      : 'transparent'};
  border: ${({ variant, theme, background }) =>
    variant === 'outlined'
      ? `1px solid ${theme.colors[background || 'primary'].main}`
      : 'none'};
`;
