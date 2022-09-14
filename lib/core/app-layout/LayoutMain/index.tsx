import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useAuth } from '../../auth';
import { Header, SideBar } from './components';
import { ChildrenBox, Container, Logo } from './styled';

export const LayoutMain: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
  hiddenSidebars,
  hiddenLogin
}: {
  children: JSX.Element | JSX.Element[];
  hiddenSidebars?: boolean;
  hiddenLogin?: boolean;
}) => {
  const [showAside] = useState(true);
  const { isSession, currentUser, ...res } = useAuth();

  useEffect(() => {
    isSession && res.getCurrentUser();
  }, [isSession]);

  return (
    <Container hiddenSidebars={hiddenSidebars}>
      <Logo>
        <Image src="/logo.svg" alt="logo" width={90} height={100} />
      </Logo>
      <Header
        isSession={isSession}
        currentUser={currentUser}
        hiddenLogin={hiddenLogin}
      />
      {!hiddenSidebars && <SideBar showAside={showAside} />}
      <ChildrenBox>{children}</ChildrenBox>
    </Container>
  );
};
