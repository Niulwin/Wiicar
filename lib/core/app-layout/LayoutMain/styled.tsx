import styled from 'styled-components';

// Container
export const Container = styled.div<{ hiddenSidebars?: boolean }>`
  display: grid;
  height: 100vh;
  width: 100vw;
  transition: 0.5s;
  grid-template-rows: 72px 1fr;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const ChildrenBox = styled.div`
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
  transition: 0.3s;
  background: url('/logo/logo2x.png') no-repeat center;
  background-size: 166px 40px;
  width: 166px;
  height: 44px;
`;
