import { MouseEventHandler } from 'react';

export type TCardProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: JSX.Element | JSX.Element[];
  mHeight?: string;
  justify?: string;
};
