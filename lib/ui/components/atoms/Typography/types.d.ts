import { CSSProperties, FC, PropsWithChildren } from 'react';

export type TypographyVariant = {
  h1: FC<TTypography>;
  h2: FC<TTypography>;
  h3: FC<TTypography>;
  h4: FC<TTypography>;
  h5: FC<TTypography>;
  h6: FC<TTypography>;
  subtitle: FC<TTypography>;
  body1: FC<TTypography>;
  body2: FC<TTypography>;
  caption: FC<TTypography>;
  caption2: FC<TTypography>;
  caption3: FC<TTypography>;
};

export interface TTypography extends PropsWithChildren {
  variant: keyof TypographyVariant;
  style?: CSSProperties;
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'light'
    | 'error'
    | 'success'
    | 'info'
    | 'disabled';
  align?: 'center' | 'left' | 'right';
}
