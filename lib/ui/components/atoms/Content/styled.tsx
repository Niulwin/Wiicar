import styled from 'styled-components';

export const Container = styled.div<{ justify?: string }>`
  display: flex;
  gap: 10px;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  padding: 1rem 2rem;
  background-color: #f8f7fa;
`;
