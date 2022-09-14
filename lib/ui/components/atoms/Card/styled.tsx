import styled from 'styled-components';

export const Section = styled.div<{ mHeight?: string; justify?: string }>`
  display: flex;
  width: 100%;
  height: auto;
  padding: 16px;
  text-align: center;
  justify-content: ${({ justify }) => justify || 'center'};
  min-height: ${({ mHeight }) => mHeight};
  gap: 15px;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.main};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  box-shadow: 0px 2px 16px rgb(20 9 51 / 8%);
  cursor: pointer;
`;
