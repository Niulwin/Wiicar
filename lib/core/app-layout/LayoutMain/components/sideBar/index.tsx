import { Tooltip } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { getModulesRoutes } from '../../../route';
import { RoutesInterface } from '../../../route/routes';
import {
  ContainerAside,
  Content,
  Icon,
  NavLink as NavigationLink,
  OptionMenu,
  TextNav
} from './styled';

export const SideBar: FC<{ showAside: boolean }> = ({
  showAside
}: {
  showAside: boolean;
}) => {
  //Hooks
  const router = useRouter();

  //Route
  const ModuleRoutes = getModulesRoutes();

  const [isOpenCategories, setIsOpenCategories] = useState<
    Record<string, boolean>
  >({});

  const handleOpenOption = (key: string) => {
    setIsOpenCategories({ [key]: !isOpenCategories[key] });
  };

  return (
    <ContainerAside show={showAside}>
      <Content>
        {ModuleRoutes.map((x: RoutesInterface, i: number) => (
          <OptionMenu
            onClick={() => handleOpenOption(x.key)}
            key={`routes${i}`}
          >
            <Link passHref href={x?.path || ''}>
              <a style={{ textDecoration: 'none', width: '100%' }}>
                <Tooltip
                  placement="rightBottom"
                  title={!showAside ? x?.name : ''}
                >
                  <NavigationLink
                    active={router.pathname === x.path}
                    show={showAside}
                  >
                    <Icon active={router.pathname === x.path} icon={x?.icon} />
                    <TextNav
                      active={router.pathname === x.path}
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
