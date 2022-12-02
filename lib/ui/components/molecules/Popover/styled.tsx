import styled from 'styled-components';
import { TPopoverProps } from './types';

type TContainerStyle = Pick<TPopoverProps, 'variant' | 'background' | 'size'>;

export const PopoverContainer = styled.div<TContainerStyle>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  font-size: 16px;
  margin-right: 0.5rem;
  border-radius: 10px;
  background-color: ${({ variant, theme, background }) =>
    variant === 'contained'
      ? theme.colors[background || 'primary'].main + '2A'
      : 'transparent'};
  border: ${({ variant, theme, background }) =>
    variant === 'outlined'
      ? `1px solid ${theme.colors[background || 'primary'].main}`
      : 'none'};
`;

export const PopoverChildren = styled.div`
  position: absolute;
  bottom: 90%;
  border-radius: 8px;
  padding: 5px 10px;
  width: 96%;
  border: ${({ theme }) => ` 1px solid  ${theme.colors.border.main}`};
  background-color: ${({ theme }) => theme.colors.background.main};
`;
