import { PropsWithChildren } from 'react';
import { TTypography } from '../../atoms/Typography/types';

export interface TChipProps extends PropsWithChildren {
  typographyProp?: TTypography;
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
