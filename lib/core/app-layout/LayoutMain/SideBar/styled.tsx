import styled from 'styled-components';

type TContainerAside = {
  show?: boolean;
};
export const ContainerAside = styled.div<TContainerAside>`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #d2d2d27b;
  justify-content: space-between;
  transition: 0.3s;
  width: ${({ show }) => (show ? '230px' : '75px')};
  padding: 10px;
`;
export const TopSection = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;
  height: 80%;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0.5em;
`;
export const BottomSection = styled.div`
  display: flex;
  height: auto;
  border-top: 1px solid #d2d2d2;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0.5em;
`;
export const ImgIcon = styled.img`
  font-size: 15px;
  width: 13px;
  fill: black;
`;
export const OptionMenu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;
export const NavLink = styled.div<{ show?: boolean; isActive?: any }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${({ show }) => (show ? '15px' : '0')};
  transition: 0.3s;
  color: #fff;
  border-radius: 4px;
  border: ${({ isActive, theme }) =>
    isActive ? '1px solid gray' : '1px solid transparent'};
  height: 40px;
  padding: 0px 12px;
  cursor: pointer;
`;
export const TextNav = styled.span<any>`
  display: flex;
  font-size: 12px;
  color: #000;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  height: 100%;
  width: ${({ showAside }) => (showAside ? '100%' : '0px')};
  overflow: hidden;
  visibility: ${({ showAside }) => (showAside ? 'visible' : 'hidden')};
  transition: 0.3s all ease-in;
`;
export const RowOption = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 0px 10px 20px;
  background-color: #d2d2d220;
  &::selection {
    background-color: transparent;
  }
`;
export const Option = styled.a`
  display: flex;
  font-size: 12px;
  color: #000;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  height: 100%;
  overflow: hidden;
`;
