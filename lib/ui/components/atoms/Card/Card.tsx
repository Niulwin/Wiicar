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
  gap,
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
      justify={justify}
      mHeight={mHeight}
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
