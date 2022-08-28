import styled from 'styled-components';

export const Head = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  padding: 1em 2rem;
  flex-direction: row;
  border-bottom: 1px solid #f1f1f1;
  align-items: center;
  justify-content: space-between;
`;
export const Menu = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const ButtonLogOut = styled.button`
  display: flex;
  color: #000;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  border-radius: 3px;
  width: 100px;
  border: 3px solid #2b4466;
  height: 40px;
  transition: 0.1s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
export const ButtonCustom = styled.button`
  display: flex;
  justify-content: center;
  background-color: #2b4466;
  align-items: center;
  border-radius: 3px;
  width: 100px;
  border: 3px solid #2b4466;
  height: 40px;
  transition: 0.1s;
  cursor: pointer;
  color: #fff;
  :hover {
    transform: scale(1.1);
  }
`;
