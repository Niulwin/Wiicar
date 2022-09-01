import React, { MouseEvent, ReactNode } from 'react';

export type TCardProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: ReactNode;
  mHeight?: string;
  justify?: string;
};
