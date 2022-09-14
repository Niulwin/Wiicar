import { FC } from 'react';
import { Flex } from './styled';
import { TFlexContainerProps } from './types';

export const FlexContainer: FC<TFlexContainerProps> = ({
  children,
  justify,
  align,
  padding,
  direction
}: TFlexContainerProps) => {
  return (
    <Flex
      justify={justify}
      direction={direction}
      align={align}
      padding={padding}
    >
      {children}
    </Flex>
  );
};
