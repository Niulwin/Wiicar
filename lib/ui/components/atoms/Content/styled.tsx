import styled from 'styled-components';

export const Container = styled.div<{
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end';
  noPadding?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  width: 100%;
  padding: ${({ noPadding }) => (noPadding ? 0 : '1rem')};
  margin-bottom: 20px;
`;
