import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
  min-width: 400px;
  margin-top: 4rem;
  gap: 20px;
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-self: start;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 5px;
  background-color: transparent;
  width: 85px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  :hover {
    background-color: #697af818;
  }
`;

export const ButtonMetamask = styled.div`
  width: 70%;
  padding: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  :hover {
    border: 1px solid #fff;
  }
  background-color: ${({ theme }) => theme.colors.text.light};
`;
export const ImgInfo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const BoxInput = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;
export const Icon = styled(FontAwesomeIcon)`
  display: flex;
  position: absolute;
  color: #90a4ae;
  font-size: 15px;
  top: 38%;
  right: 4%;
  cursor: pointer;
`;
export const Title = styled.h2`
  width: 100%;
  font-size: 32px;
  margin: 0px 0px 20px 0px;
  text-align: center;
`;

export const Input = styled.input`
  display: flex;
  border: 2px solid rgb(255, 255, 255, 0);
  transition: border 0.2s ease-in-out;
  color: #90a4ae;
  border-radius: 5px;
  background-color: #eef2f6;
  outline: none;
  height: 50px;
  padding: 0px 12px;
  :hover {
    border: 2px solid #6979f8;
    background-color: #fff;
  }
  &:focus {
    border: 2px solid #6979f8;
  }
`;
export const ButtonIn = styled.button`
  display: flex;
  margin-top: 5px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 5px;
  border: none;
  background-color: #6979f8;
  outline: none;
  height: 50px;
  padding: 0px 12px;
  width: 480px;
  cursor: pointer;
`;
