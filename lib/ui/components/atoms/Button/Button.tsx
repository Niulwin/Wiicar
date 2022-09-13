import { FC } from 'react';
import { Typography } from '../Typography';
import { ContentButton, Icon } from './styled';
import { TButtonProps } from './types';

export const Button: FC<TButtonProps> = ({
  onClick,
  title,
  children,
  variant,
  color,
  iconLeft,
  style,
  background
}: TButtonProps) => {
  return (
    <ContentButton
      style={style}
      variant={variant || 'contained'}
      onClick={onClick}
      background={background}
    >
      {iconLeft && <Icon size="1x" icon={iconLeft} color={color} />}
      <Typography
        color={
          color || (variant === 'contained' ? 'textSecondary' : 'textPrimary')
        }
        variant="caption"
      >
        {title || ''}
      </Typography>
      {children}
    </ContentButton>
  );
};
