import styled from 'styled-components';

export const Section = styled.div<{ mHeight?: string; justify?: string }>`
  display: flex;
  height: auto;
  padding: 16px;
  text-align: center;
  justify-content: ${({ justify }) => justify || 'center'};
  min-height: ${({ mHeight }) => mHeight};
  gap: 15px;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 16px rgb(20 9 51 / 8%);
  cursor: pointer;
`;
