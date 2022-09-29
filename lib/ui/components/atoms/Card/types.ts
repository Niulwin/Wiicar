import { CSSProperties, MouseEventHandler } from 'react';

export type TCardProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: JSX.Element | JSX.Element[];
  style?: CSSProperties;
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

export enum CardWidthSize {
  xs = '50px',
  small = '100px',
  normal = '150px',
  large = '200px',
  xl = '250px',
  fullWidth = '100%',
  auto = 'auto'
}
export enum CardHeightSize {
  xs = '50px',
  small = '100px',
  normal = '150px',
  large = '200px',
  xl = '250px',
  fullWidth = '100%',
  auto = 'auto'
}
