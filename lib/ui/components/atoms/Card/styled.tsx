import styled from 'styled-components';
import { TCardProps } from './types';

export const Section = styled.div<TCardProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  gap: ${({ gap }) => gap || '15px'};
  height: auto;
  padding: ${({ padding }) => padding || '16px'};
  text-align: center;
  justify-content: ${({ justify }) => justify || 'center'};
  min-height: ${({ mHeight }) => mHeight};
  align-items: ${({ align }) => align || 'center'};
  flex-direction: ${({ direction }) => direction || 'column'};
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  box-shadow: 0px 2px 16px rgb(20 9 51 / 8%);
  cursor: pointer;
`;
