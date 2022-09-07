// Modules
import { FC, useState } from 'react';
import { Header, SideBar } from './components';

// Components and Types

// Utils, Styles
import { ChildrenBox, Container } from './styled';

export const LayoutMain: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  // Declaration of variables and states
  const [showAside] = useState(true);

  return (
    <Container>
      <Header />
      <SideBar showAside={showAside} />
      <ChildrenBox>{children}</ChildrenBox>
    </Container>
  );
};
