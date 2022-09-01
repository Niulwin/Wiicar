import { FC } from 'react';
import { TextSpan } from './styled';
import { TTypography } from './types';

export const Typography: FC<TTypography> = ({
  text,
  fSize,
  color,
  align
}: TTypography) => {
  return (
    <TextSpan align={align} color={color} fSize={fSize}>
      {text || ''}
    </TextSpan>
  );
};
