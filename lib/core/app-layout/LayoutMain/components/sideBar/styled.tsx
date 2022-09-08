import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

type TContainerAside = {
  show?: boolean;
};
export const ContainerAside = styled.div<TContainerAside>`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem;
  background-color: #fff;
  justify-content: space-between;
  transition: 0.3s;
  width: ${({ show }) => (show ? '230px' : '55px')};
`;

export const SectionImg = styled.div`
  display: flex;
  width: 100%;
  min-height: 72px;
  max-height: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1px;
  overflow-y: auto;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0.5em;
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
export const NavLink = styled.div<{ show?: boolean; active?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: ${({ show }) => (show ? '15px' : '0')};
  transition: 0.3s;
  color: #fff;
  background-color: ${({ active }) => (active ? '#7367f0' : 'transparent')};
  height: 40px;
  padding: 10px 15px 10px 20px;
  cursor: pointer;
  :hover {
    padding: 10px 15px 10px 25px;
  }
`;
export const TextNav = styled.span<{ active: boolean; showAside: boolean }>`
  display: flex;
  font-size: 12px;
  color: ${({ active }) => (active ? '#fff' : '#6e6b7b')};
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  height: 100%;
  width: ${({ showAside }) => (showAside ? '100%' : '0px')};
  overflow: hidden;
  visibility: ${({ showAside }) => (showAside ? 'visible' : 'hidden')};
  transition: 0.3s all ease-in;
`;
export const Icon = styled(FontAwesomeIcon)<{ active?: boolean }>`
  display: flex;
  font-size: 15px;
  color: ${({ active }) => (active ? '#fff' : '#6e6b7b')};
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
export const ImgIcon = styled.img`
  font-size: 15px;
  width: 13px;
  fill: black;
`;
