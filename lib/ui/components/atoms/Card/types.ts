import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';

export interface TCardProps extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: JSX.Element | JSX.Element[];
  style?: CSSProperties;
  variant?: 'text' | 'contained' | 'outlined';
  background?:
    | 'background'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'info'
    | 'border';
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
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  padding?: string;
  position?: 'absolute' | 'relative' | 'fixed';
  direction?: 'column' | 'row' | 'row-reverse';
  width?: string | number;
  gap?: string;
  mHeight?: string;
}

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
