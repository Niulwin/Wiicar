import { FC } from 'react';
import { Flex } from './styled';
import { TFlexContainerProps } from './types';

export const FlexContainer: FC<TFlexContainerProps> = ({
  children,
  justify,
  align,
  padding,
  direction,
  position,
  sm,
  width,
  style,
  gap,
  shadow,
  className
}: TFlexContainerProps) => {
  return (
    <Flex
      gap={gap}
      sm={sm}
      width={width}
      justify={justify}
      direction={direction}
      align={align}
      padding={padding}
      position={position}
      style={style}
      shadow={shadow}
      className={className}
    >
      {children}
    </Flex>
  );
};
