import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.textPrimary};
  border-radius: 5px;
  outline: none;
  height: 30px;
  padding: 4px 12px;
  width: 100%;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary.main};
  }
`;
