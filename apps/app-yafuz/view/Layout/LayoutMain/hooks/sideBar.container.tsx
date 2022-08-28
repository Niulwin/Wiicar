import { FC } from 'react';
import { SideBarView } from '../components/sideBar/SideBar.component';

export const SideBar: FC<any> = ({ showAside, handleClick }: any) => {
  return <SideBarView showAside={showAside} handleClick={handleClick} />;
};
