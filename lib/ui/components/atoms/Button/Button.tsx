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
  background,
  size
}: TButtonProps) => {
  return (
    <ContentButton
      size={size}
      style={style}
      variant={variant || 'contained'}
      onClick={onClick}
      background={background}
    >
      {iconLeft && (
        <Icon
          size="1x"
          icon={iconLeft}
          color={color}
          style={!title ? { margin: 0 } : { marginRight: 5 }}
        />
      )}
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
