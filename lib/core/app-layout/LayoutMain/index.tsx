import { FC } from 'react';
import { Header } from '../components';
import { ChildrenBox, Container } from './styled';

export const LayoutMain: FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Container>
      <Header />
      <ChildrenBox>{children}</ChildrenBox>
    </Container>
  );
};
