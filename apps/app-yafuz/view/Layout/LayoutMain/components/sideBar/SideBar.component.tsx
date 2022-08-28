import { Tooltip } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { getModulesRoutes } from '../../../../route';
import {
  ContainerAside,
  Content,
  Icon,
  NavLink as NavigationLink,
  OptionMenu,
  SectionImg,
  TextNav
} from './styled';

export const SideBarView: FC<any> = ({ showAside }: any) => {
  //Hooks
  const router = useRouter();

  //Route
  const ModuleRoutes = getModulesRoutes();

  const [isOpenCategories, setIsOpenCategories] = useState<any>({});

  const handleOpenOption = (key: keyof typeof isOpenCategories) => {
    setIsOpenCategories({ [key]: !isOpenCategories[key] });
  };

  return (
    <ContainerAside show={showAside}>
      <SectionImg>
        <Image src="/logo.svg" alt="logo" width={90} height={100} />
      </SectionImg>
      <Content>
        {ModuleRoutes.map((x: any, i: number) => (
          <OptionMenu
            onClick={() => handleOpenOption(x?.key as any)}
            key={`routes${i}`}
          >
            <Link passHref href={x?.path || ''}>
              <a style={{ textDecoration: 'none', width: '100%' }}>
                <Tooltip
                  placement="rightBottom"
                  title={!showAside ? x?.name : ''}
                >
                  <NavigationLink
                    isActive={router.pathname === x.path}
                    show={showAside}
                  >
                    <Icon
                      isActive={router.pathname === x.path}
                      icon={x?.icon}
                    />
                    <TextNav
                      isActive={router.pathname === x.path}
                      showAside={showAside}
                    >
                      {x?.name}
                    </TextNav>
                  </NavigationLink>
                </Tooltip>
              </a>
            </Link>
          </OptionMenu>
        ))}
      </Content>
    </ContainerAside>
  );
};
