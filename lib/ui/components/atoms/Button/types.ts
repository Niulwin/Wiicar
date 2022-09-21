import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties, MouseEventHandler } from 'react';

export type TButtonProps = {
  style?: CSSProperties;
  loading?: boolean;
  type?: 'submit' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconLeft?: IconProp;
  children?: JSX.Element | JSX.Element[];
  title?: string;
  variant?: 'text' | 'contained' | 'outlined';
  background?: 'primary' | 'secondary' | 'error' | 'success' | 'info';
  size?: 'xs' | 'small' | 'normal' | 'large' | 'xl' | 'fullWidth' | 'auto';
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'light'
    | 'error'
    | 'success'
    | 'info';
};

export enum ButtonSize {
  xs = '50px',
  small = '100px',
  normal = '150px',
  large = '200px',
  xl = '250px',
  fullWidth = '100%',
  auto = 'auto'
}
