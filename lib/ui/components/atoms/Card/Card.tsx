import { FC } from 'react';
import { Section } from './styled';
import { TCardProps } from './types';

export const Card: FC<TCardProps> = ({
  onClick,
  children,
  mHeight,
  justify,
  align,
  padding,
  direction,
  position,
  width,
  gap
}: TCardProps) => {
  return (
    <Section
      justify={justify}
      mHeight={mHeight}
      onClick={onClick}
      gap={gap}
      width={width}
      direction={direction}
      align={align}
      padding={padding}
      position={position}
    >
      {children}
    </Section>
  );
};
