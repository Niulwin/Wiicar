import { FC } from 'react';
import { Loading } from '../Loading';
import { Typography } from '../Typography';
import { ContentButton, Icon } from './styled';
import { TButtonProps } from './types';

export const Button: FC<TButtonProps> = ({
  onClick,
  title,
  type,
  children,
  variant,
  color,
  iconLeft,
  style,
  background,
  size,
  loading
}: TButtonProps) => {
  return (
    <ContentButton
      size={size}
      style={style}
      variant={variant || 'contained'}
      onClick={(e) => (!loading && onClick ? onClick(e) : null)}
      background={background}
      type={type || 'button'}
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
        {loading ? <Loading color={color} /> : title || ''}
      </Typography>
      {children}
    </ContentButton>
  );
};
