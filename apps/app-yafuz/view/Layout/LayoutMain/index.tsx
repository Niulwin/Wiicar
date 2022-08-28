// Modules
import { FC, useState } from 'react';

// Components and Types
import { Header } from './hooks/header.container';
import { SideBar } from './hooks/sideBar.container';

// Utils, Styles
import { ChildrenBox, Container } from './styled';

export const LayoutMain: FC<any> = ({ children }: any) => {
  // Declaration of variables and states
  const [showAside, setShowAside] = useState(true);

  return (
    <Container>
      <Header />
      <SideBar
        showAside={showAside}
        handleClick={() => setShowAside(!showAside)}
      />
      <ChildrenBox>{children}</ChildrenBox>
    </Container>
  );
};
