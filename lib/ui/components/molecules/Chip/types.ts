import { PropsWithChildren } from 'react';

export interface TChipProps extends PropsWithChildren {
  title?: string;
  variant?: 'text' | 'contained' | 'outlined';
  background?: 'primary' | 'secondary' | 'error' | 'success' | 'info';
  size?: 'xs' | 'small' | 'normal' | 'large' | 'xl';
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'light'
    | 'error'
    | 'success'
    | 'info';
}
export enum ChipSize {
  xs = '25px',
  small = '50px',
  normal = '75px',
  large = '100px',
  xl = '125px'
}
