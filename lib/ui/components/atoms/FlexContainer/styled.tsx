import styled, { css } from 'styled-components';
import { TFlexContainerProps } from './types';

export const Flex = styled.div<TFlexContainerProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  gap: ${({ gap }) => gap || '0px'};
  padding: ${({ padding }) => padding || '1rem'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  flex-direction: ${({ direction }) => direction || 'column'};
  ${({ position }) =>
    position &&
    css`
      ${position}
    `};
`;
