import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { ContainerAside } from './styled';
import { TSideBarV } from './types';

export const SideBarView: FC<TSideBarV> = ({
  showAside,
  handleClick
}: TSideBarV) => {
  // Hooks
  const router = useRouter();

  const [isOpenCategories, setIsOpenCategories] = useState<any>({});

  const handleOpenOption = (key: keyof typeof isOpenCategories) => {
    setIsOpenCategories({ [key]: !isOpenCategories[key] });
  };

  return <ContainerAside show={showAside}></ContainerAside>;
};
