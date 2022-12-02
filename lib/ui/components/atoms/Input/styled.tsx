import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.textPrimary};
  border-radius: 20px;
  outline: none;
  height: 40px;
  padding: 4px 12px;
  width: 100%;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: no-drop;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
    opacity: 0.5;
    cursor: no-drop;
  }
`;
