import { FC } from 'react';
import {
  TypographyBody1,
  TypographyBody2,
  TypographyCaption,
  TypographyCaption2,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographySubtitle
} from './styled';
import { TTypography, TypographyVariant } from './types';

const TypographySchema: TypographyVariant = {
  h1: (props: TTypography) => (
    <TypographyH1 {...props}>{props.children}</TypographyH1>
  ),
  h2: (props: TTypography) => (
    <TypographyH2 {...props}>{props.children}</TypographyH2>
  ),
  h3: (props: TTypography) => (
    <TypographyH3 {...props}>{props.children}</TypographyH3>
  ),
  h4: (props: TTypography) => (
    <TypographyH4 {...props}>{props.children}</TypographyH4>
  ),
  h5: (props: TTypography) => (
    <TypographyH5 {...props}>{props.children}</TypographyH5>
  ),
  h6: (props: TTypography) => (
    <TypographyH6 {...props}>{props.children}</TypographyH6>
  ),
  subtitle: (props: TTypography) => (
    <TypographySubtitle {...props}>{props.children}</TypographySubtitle>
  ),
  body1: (props: TTypography) => (
    <TypographyBody1 {...props}>{props.children}</TypographyBody1>
  ),
  body2: (props: TTypography) => (
    <TypographyBody2 {...props}>{props.children}</TypographyBody2>
  ),
  caption: (props: TTypography) => (
    <TypographyCaption {...props}>{props.children}</TypographyCaption>
  ),
  caption2: (props: TTypography) => (
    <TypographyCaption2 {...props}>{props.children}</TypographyCaption2>
  )
};

export const Typography: FC<TTypography> = (props: TTypography) => {
  return TypographySchema[props.variant](props);
};
