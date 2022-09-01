import { FC } from 'react';
import { Container } from './styled';
import { TContentProps } from './types';

export const Content: FC<TContentProps> = ({ children }: TContentProps) => {
  return <Container>{children}</Container>;
};
