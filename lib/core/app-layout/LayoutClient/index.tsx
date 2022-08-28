// Modules
import { FC } from 'react';

// Utils, Styles and Types
import { Container } from './styled';

export const LayoutClient: FC<any> = ({ children }: any) => (
  <Container>{children}</Container>
);
