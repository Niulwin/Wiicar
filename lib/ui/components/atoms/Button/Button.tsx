import { FC } from 'react';
import { ContentButton } from './styled';
import { TButtonProps } from './types';

export const Button: FC<TButtonProps> = ({
  onClick,
  children
}: TButtonProps) => {
  return <ContentButton onClick={onClick}>{children}</ContentButton>;
};
