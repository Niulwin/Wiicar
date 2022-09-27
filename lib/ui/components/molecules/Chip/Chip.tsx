import { FC } from 'react';
import { Typography } from '../../atoms';
import { ChipContainer } from './styled';
import { TChipProps } from './types';

export const Chip: FC<TChipProps> = ({
  children,
  background,
  color,
  size,
  title,
  variant
}: TChipProps) => {
  return (
    <ChipContainer
      background={background}
      size={size}
      variant={variant}
      style={{ fontWeight: 'bold' }}
    >
      <Typography variant="caption3" color={color}>
        {children || title}
      </Typography>
    </ChipContainer>
  );
};
