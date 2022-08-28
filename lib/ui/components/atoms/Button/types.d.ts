import React, { MouseEvent, ReactNode } from 'react';

export type TButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: ReactNode;
};
