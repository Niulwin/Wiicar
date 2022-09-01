import { FC } from 'react';
import { Section } from './styled';
import { TCardProps } from './types';

export const Card: FC<TCardProps> = ({
  onClick,
  children,
  mHeight,
  justify
}: TCardProps) => {
  return (
    <Section justify={justify} mHeight={mHeight} onClick={onClick}>
      {children}
    </Section>
  );
};
