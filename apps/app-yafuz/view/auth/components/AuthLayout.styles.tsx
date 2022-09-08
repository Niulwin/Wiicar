import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
export const Section = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 10px;
  background: ${({ background }) =>
    background || 'linear-gradient(225deg, #cdd2fd 3.26%, #6979f8 100%)'};
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-self: start;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 12px;
  color: #6979f8;
  border-radius: 5px;
  background-color: transparent;
  width: 85px;
  height: 40px;
  border: 1px solid #6979f8;
  cursor: pointer;
  :hover {
    background-color: #697af818;
  }
`;

export const ImgInfo = styled.img`
  object-fit: contain;
  width: 40%;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  border: none;
  :hover {
    border: 1px solid #fff;
  }
`;
