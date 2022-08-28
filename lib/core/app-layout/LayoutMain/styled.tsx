import styled from 'styled-components';

// Container
export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  transition: 0.5s;
  grid-template-areas:
    'header header'
    'aside children';
  grid-template-rows: minmax(min-content, 1px) 1fr;
  grid-template-columns: minmax(min-content, 1px) 4fr;
  background-color: ${(props) => props.theme.BGAColor};
`;
export const Main = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  transition: 0.5s;
  grid-template-areas:
    'header header'
    'aside children';
  grid-template-rows: minmax(min-content, 1px) 1fr;
  grid-template-columns: minmax(min-content, 1px) 4fr;
  background-color: ${(props) => props.theme.BGAColor};
`;
export const ChildrenBox = styled.div`
  grid-area: children;
  overflow: auto;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
