import styled from 'styled-components';

export const Select = styled.select<{ selected?: boolean }>`
  display: flex;
  border: none;
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.textPrimary};
  border-radius: 5px;
  outline: none;
  height: 30px;
  padding: 4px 12px;
  width: 100%;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
