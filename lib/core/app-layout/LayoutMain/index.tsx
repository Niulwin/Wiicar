// Modules
import { FC, ReactNode, useState } from 'react';
import { Header, SideBar } from './components';

// Components and Types

// Utils, Styles
import { ChildrenBox, Container } from './styled';

export const LayoutMain: FC<{ children: ReactNode }> = ({
  children
}: {
  children: ReactNode;
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
