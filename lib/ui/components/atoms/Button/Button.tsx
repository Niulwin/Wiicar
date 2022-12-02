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
  iconRight,
  style,
  background,
  size,
  loading,
  tooltip,
  disabled,
  typographyProps
}: TButtonProps) => {
  return (
    <ContentButton
      title={tooltip}
      size={size}
      style={style}
      variant={variant || 'contained'}
      onClick={(e) => (!loading && !disabled && onClick ? onClick(e) : null)}
      background={disabled ? 'disabled' : background}
      type={type || 'button'}
      iconLeft={!!iconLeft}
      iconRight={!!iconRight}
    >
      {!loading && iconLeft && (
        <Icon
          size="1x"
          icon={iconLeft}
          color={color}
          style={
            !title ? { margin: 0, left: 10 } : { marginRight: 5, left: 10 }
          }
        />
      )}
      {title && (
        <Typography
          color={
            color || (variant === 'contained' ? 'textSecondary' : 'textPrimary')
          }
          variant="caption"
          {...typographyProps}
        >
          {loading ? <Loading color={color} /> : title || ''}
        </Typography>
      )}
      {children}
      {!loading && iconRight && (
        <Icon
          size="1x"
          icon={iconRight}
          color={color}
          style={
            !title ? { margin: 0, right: 10 } : { marginLeft: 5, right: 10 }
          }
        />
      )}
    </ContentButton>
  );
};
