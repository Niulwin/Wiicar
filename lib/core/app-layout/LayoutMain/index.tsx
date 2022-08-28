// Modules
import { FC, useState } from 'react';

// Components and Types
import { Header } from './Header/Header.container';
import { SideBar } from './SideBar/SideBar.container';
import { TLayout } from './types';

// Utils, Styles
import { ChildrenBox, Container } from './styled';

export const LayoutMain: FC<TLayout> = ({ children }: TLayout) => {
  // Declaration of variables and states
  const [showAside, setShowAside] = useState(false);

  return (
    <Container>
      {/* <Main> */}
      <Header />
      <SideBar
        showAside={showAside}
        handleClick={() => setShowAside(!showAside)}
      />
      <ChildrenBox>{children}</ChildrenBox>
      {/* </Main> */}
    </Container>
  );
};
