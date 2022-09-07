import { MouseEventHandler } from 'react';

export type TButtonProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: JSX.Element | JSX.Element[];
};
