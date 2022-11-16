import styled, { css } from 'styled-components';
import { GridSystem, TFlexContainerProps } from './types';

export const Flex = styled.div<TFlexContainerProps>`
  display: flex;
  width: ${({ sm, width }) => width || GridSystem[`grid_${sm || '12'}`]};
  gap: ${({ gap }) => gap || '0px'};
  padding: ${({ padding }) => padding || '1rem'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  flex-direction: ${({ direction }) => direction || 'column'};
  ${({ position }) =>
    position &&
    css`
      position: ${position};
    `};
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0px 2px 16px rgb(20 9 51 / 15%);
    `};
`;
