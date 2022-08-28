import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ContentOptions = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 10px;
  padding: 0.5em;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
