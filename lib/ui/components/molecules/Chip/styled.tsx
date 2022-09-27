import styled from 'styled-components';
import { ChipSize, TChipProps } from './types';

type TContainerStyle = Pick<TChipProps, 'variant' | 'background' | 'size'>;

export const ChipContainer = styled.div<TContainerStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin-right: 0.5rem;
  border-radius: 100%;
  width: ${({ size }) => ChipSize[size || 'xs']};
  height: ${({ size }) => ChipSize[size || 'xs']};
  min-width: ${({ size }) => ChipSize[size || 'xs']};
  min-height: ${({ size }) => ChipSize[size || 'xs']};
  max-width: ${({ size }) => ChipSize[size || 'xs']};
  max-height: ${({ size }) => ChipSize[size || 'xs']};
  background-color: ${({ variant, theme, background }) =>
    variant === 'contained'
      ? theme.colors[background || 'primary'].main
      : 'transparent'};
  border: ${({ variant, theme, background }) =>
    variant === 'outlined'
      ? `1px solid ${theme.colors[background || 'primary'].main}`
      : 'none'};
`;
