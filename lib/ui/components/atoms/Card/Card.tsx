import { FC } from 'react';
import { Section } from './styled';
import { TCardProps } from './types';

export const Card: FC<TCardProps> = ({
  onClick,
  children,
  size,
  style,
  variant,
  background
}: TCardProps) => {
  return (
    <Section
      size={size}
      style={style}
      variant={variant || 'contained'}
      onClick={onClick}
      background={background}
    >
      {children}
    </Section>
  );
};
