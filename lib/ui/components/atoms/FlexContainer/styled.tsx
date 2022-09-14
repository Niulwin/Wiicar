import styled from 'styled-components';
import { TFlexContainerProps } from './types';

export const Flex = styled.div<TFlexContainerProps>`
  display: flex;
  width: 100%;
  padding: ${({ padding }) => padding || '1rem'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  flex-direction: ${({ direction }) => direction || 'column'};
`;
