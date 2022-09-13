import { FC } from 'react';

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
};

export type TTypography = {
  children: JSX.Element | JSX.Element[] | string;
  variant: keyof TypographyVariant;
  color?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary' | 'light';
  align?: 'center' | 'left' | 'right';
};
