import { Tooltip } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Typography } from 'ui';
import { useTranslate } from '../../../i18n/hooks';
import { routes, RoutesInterface } from '../../route';
import {
  ContainerAside,
  Content,
  Icon,
  NavLink as NavigationLink,
  OptionMenu
} from './styled';

export const SideBar: FC<{ showAside: boolean; isSession: boolean }> = ({
  showAside,
  isSession
}: {
  showAside: boolean;
  isSession: boolean;
}) => {
  const router = useRouter();
  const translate = useTranslate();

  const [isOpenCategories, setIsOpenCategories] = useState<
    Record<string, boolean>
  >({});

  const handleOpenOption = (key: string) => {
    setIsOpenCategories({ [key]: !isOpenCategories[key] });
  };

  return (
    <ContainerAside show={showAside}>
      <Content>
        {routes.map(
          (x: RoutesInterface, i: number) =>
            (!x.isPrivate || isSession === x.isPrivate) && (
              <OptionMenu
                onClick={() => handleOpenOption(x.key)}
                key={`routes${i}`}
              >
                <Link passHref href={x?.path || ''}>
                  <a style={{ textDecoration: 'none', width: '100%' }}>
                    <Tooltip
                      placement="rightBottom"
                      title={!showAside ? x.name : ''}
                    >
                      <NavigationLink
                        active={router.pathname === x.path}
                        show={showAside}
                      >
                        <Icon
                          active={router.pathname === x.path ? 'true' : 'false'}
                          icon={x?.icon}
                        />
                        <Typography
                          variant="caption"
                          color={
                            router.pathname === x.path ? 'light' : 'textPrimary'
                          }
                          // active={router.pathname === x.path}
                          // showAside={showAside}
                        >
                          {translate(x.name)}
                        </Typography>
                      </NavigationLink>
                    </Tooltip>
                  </a>
                </Link>
              </OptionMenu>
            )
        )}
      </Content>
    </ContainerAside>
  );
};
