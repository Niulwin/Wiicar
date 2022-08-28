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
export const Card = styled.div`
  display: flex;
  height: 100%;
  min-height: 400px;
  padding: 16px;
  text-align: center;
  justify-content: center;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 16px rgb(20 9 51 / 8%);
  cursor: pointer;
`;
