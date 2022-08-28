import styled from 'styled-components';

// Container
export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  transition: 0.5s;
  grid-template-areas:
    'aside header'
    'aside children';
  grid-template-rows: 72px 1fr;
  grid-template-columns: minmax(min-content, 1px) 4fr;
`;

export const ChildrenBox = styled.div`
  grid-area: children;
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
