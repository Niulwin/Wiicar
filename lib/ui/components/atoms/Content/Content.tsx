import { FC } from 'react';
import { Container } from './styled';
import { TContentProps } from './types';

export const Content: FC<TContentProps> = ({
  children,
  direction,
  align,
  justify,
  noPadding
}: TContentProps) => {
  return (
    <Container
      noPadding={noPadding}
      justify={justify}
      align={align}
      direction={direction}
    >
      {children}
    </Container>
  );
};
