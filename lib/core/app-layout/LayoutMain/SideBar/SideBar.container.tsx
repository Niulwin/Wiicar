import { FC } from 'react';
import { SideBarView } from './SideBar.component';
import { TSideBarC } from './types';

export const SideBar: FC<TSideBarC> = ({
  showAside,
  handleClick
}: TSideBarC) => {
  // Rutas

  return <SideBarView showAside={showAside} handleClick={handleClick} />;
};
