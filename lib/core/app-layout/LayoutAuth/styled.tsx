import styled from 'styled-components';

// Container
export const Container = styled.div<{ hiddenSidebars?: boolean }>`
  display: grid;
  height: 100vh;
  width: 100vw;
  transition: 0.5s;
  grid-template-rows: 72px 1fr;
  grid-template-columns: ${({ hiddenSidebars }) =>
    !hiddenSidebars ? 'minmax(min-content, 1px) 4fr' : '230px'};
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
  background-color: ${({ theme }) => theme.colors.background.main};
  transition: 0.3s;
`;
export const Logo = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.main};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.main};
  transition: 0.3s;
`;
