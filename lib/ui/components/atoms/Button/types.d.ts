import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties, MouseEventHandler } from 'react';

export type TButtonProps = {
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  iconLeft?: IconProp;
  children?: JSX.Element | JSX.Element[];
  title?: string;
  variant?: 'text' | 'contained' | 'outlined' = 'contained';
  background?: 'primary' | 'secondary';
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'light' = 'textPrimary';
};
